# express-multer
# Express + Multer File Upload

A simple file upload system built with Express.js and Multer.

## Requirements

- Node.js installed on your machine

## Installation

```
npm install
```

## Run the server

```
node server.js
```

Server will start at:

```
http://localhost:3000
```

## API

### POST /upload

Uploads a single file and saves it inside the `uploads/` folder.

**Request:**

- Method: `POST`
- URL: `http://localhost:3000/upload`
- Body type: `form-data`

| Key  | Type | Value          |
|------|------|----------------|
| file | File | any image file |

**Response:**

```json
{
  "message": "File uploaded successfully"
}
```

## Testing with Postman

1. Open Postman and create a new request.
2. Set method to `POST` and URL to `http://localhost:3000/upload`.
3. Go to the `Body` tab and select `form-data`.
4. Add a key named `file`, change its type to `File`, and choose an image from your computer.
5. Click `Send`.
6. The uploaded file will be saved inside the `uploads/` folder, and the response will show `File uploaded successfully`.

## Project Structure

```
file-upload-app/
   ├── server.js
   ├── package.json
   └── uploads/
```