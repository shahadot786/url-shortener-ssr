# URL Shortener (SSR)

A full-stack URL shortener application built with Node.js, Express, MongoDB, and EJS. This application allows users to create shortened URLs, track click analytics, and view all shortened URLs in a clean, responsive interface.

## 🚀 Features

- **URL Shortening**: Convert long URLs into short, shareable links using nanoid
- **Click Tracking**: Automatically track visit history with timestamps for each shortened URL
- **Analytics**: View detailed analytics including total clicks and visit history for each short URL
- **Server-Side Rendering**: Fast, SEO-friendly pages rendered with EJS templates
- **Responsive UI**: Modern, gradient-based design that works on all devices
- **RESTful API**: Well-structured API endpoints for URL management

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Template Engine**: EJS (Embedded JavaScript)
- **URL Generation**: nanoid
- **Development**: Nodemon for hot reloading

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (running locally or remote instance)
- npm (comes with Node.js)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shahadot786/url-shortener-ssr.git
   cd url-shortener-ssr
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure MongoDB**
   
   The application is configured to connect to a local MongoDB instance at `mongodb://127.0.0.1:27017/short-url`. 
   
   To use a different database URL, update the `DBUrl` variable in `src/index.js`:
   ```javascript
   const DBUrl = "your-mongodb-connection-string";
   ```

4. **Start the application**
   ```bash
   npm run dev
   ```

5. **Access the application**
   
   Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

## 📁 Project Structure

```
short-url/
├── src/
│   ├── config/
│   │   └── dbConnection.js      # MongoDB connection configuration
│   ├── controllers/
│   │   └── url.controller.js    # Business logic for URL operations
│   ├── models/
│   │   └── url.model.js         # Mongoose schema for URL documents
│   ├── routes/
│   │   ├── url.route.js         # API routes for URL operations
│   │   └── staticRouter.js      # Routes for rendering views
│   ├── views/
│   │   └── home.ejs             # Main UI template
│   └── index.js                 # Application entry point
├── package.json
├── LICENSE
└── README.md
```

## 🔌 API Endpoints

### Create Short URL
- **POST** `/api/url`
- **Body**: `{ "url": "https://example.com" }`
- **Response**: Renders home page with generated short URL

### Get All URLs
- **GET** `/api/url`
- **Response**: JSON array of all shortened URLs with metadata

### Redirect to Original URL
- **GET** `/api/url/:shortId`
- **Response**: Redirects to the original URL and logs visit

### Get Analytics
- **GET** `/api/url/analytics/:shortId`
- **Response**: 
  ```json
  {
    "status": "Success",
    "data": {
      "totalClicks": 5,
      "analytics": [
        { "timestamp": 1640000000000 },
        { "timestamp": 1640000001000 }
      ]
    }
  }
  ```

## 📊 Database Schema

The application uses a simple MongoDB schema:

```javascript
{
  shortId: String,        // Unique 10-character identifier
  redirectUrl: String,    // Original URL to redirect to
  visitHistory: [         // Array of visit timestamps
    { timestamp: Number }
  ],
  createdAt: Date,       // Auto-generated
  updatedAt: Date        // Auto-generated
}
```

## 🎨 Features in Detail

### URL Shortening
- Generates a unique 10-character ID using nanoid
- Stores the original URL and short ID in MongoDB
- Displays the shortened URL immediately after creation

### Click Tracking
- Every time a short URL is accessed, a timestamp is recorded
- Visit history is stored in an array for detailed analytics
- Atomic updates ensure accurate tracking even under concurrent access

### User Interface
- Clean, modern design with gradient background
- Responsive table showing all shortened URLs
- Real-time display of click counts
- Mobile-friendly layout

## 🚀 Deployment

To deploy this application:

1. **Set up MongoDB**: Use MongoDB Atlas or any cloud MongoDB provider
2. **Update connection string**: Change `DBUrl` in `src/index.js`
3. **Set PORT**: Update the PORT variable or use environment variables
4. **Deploy**: Use platforms like Heroku, Railway, Render, or DigitalOcean

## 📝 Scripts

- `npm run dev` - Start development server with nodemon (auto-reload on changes)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**MD Shahadot Hossain**

## 🙏 Acknowledgments

- Built with Express.js for robust server-side functionality
- Uses nanoid for generating unique, URL-safe identifiers
- MongoDB for flexible, scalable data storage