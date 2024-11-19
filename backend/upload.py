import os
import subprocess
import asyncio
from http.server import BaseHTTPRequestHandler, HTTPServer
import json

if os.name == 'nt':
    asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())

class UploadHandler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_POST(self):
        uploads_dir = os.path.join(os.path.dirname(__file__), 'uploads')
        os.makedirs(uploads_dir, exist_ok=True)

        file_path = os.path.join(uploads_dir, 'data.csv')

        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)

        with open(file_path, 'wb') as f:
            f.write(post_data)

        os.chdir(os.path.dirname(__file__))

        try:
            subprocess.run(
                [
                    'jupyter',
                    'nbconvert',
                    '--execute',
                    '--to',
                    'notebook',
                    '--inplace',
                    os.path.join(os.path.dirname(__file__), 'DDoS.ipynb')
                ],
                check=True,
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE
            )
        except subprocess.CalledProcessError as e:
            print(f'Error executing notebook: {e}')
            print(f'Stdout: {e.stdout.decode()}')
            print(f'Stderr: {e.stderr.decode()}')

        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        response = {'message': 'File uploaded and processed successfully'}
        self.wfile.write(json.dumps(response).encode())

    def do_GET(self):
        if self.path.startswith('/static/'):
            file_path = os.path.join(os.path.dirname(__file__), self.path[1:])
            if os.path.exists(file_path):
                self.send_response(200)
                self.send_header('Access-Control-Allow-Origin', '*')
                self.send_header('Content-type', 'image/png')
                self.end_headers()
                with open(file_path, 'rb') as f:
                    self.wfile.write(f.read())
            else:
                self.send_response(404)
                self.end_headers()
                self.wfile.write(b'File not found')

def run(server_class=HTTPServer, handler_class=UploadHandler, port=8000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f'Server started on port {port}...')
    httpd.serve_forever()

if __name__ == '__main__':
    run()