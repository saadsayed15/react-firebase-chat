# React Firebase Chat

A real-time chat application built with React and Firebase. Users can register, search for other users, start conversations, send messages, share images, use emojis, and manage blocked users.

## 🚀 Live Demo

**Vercel:** https://react-firebase-chat-self.vercel.app/

**GitHub:** https://react-firebase-chat-self.vercel.app/

---

## ✨ Features

* User registration and login
* Firebase Authentication
* Real-time chat with Firestore
* Search for users
* Start new conversations
* Send text messages
* Send images using Cloudinary
* Emoji picker
* Message timestamps
* Online chat updates in real time
* Block and unblock users
* Responsive chat interface
* Toast notifications
* Persistent chat data

---

## 🛠️ Technologies

* React
* Vite
* Firebase Authentication
* Cloud Firestore
* Zustand
* Cloudinary
* Emoji Picker React
* Timeago.js
* React Toastify
* CSS

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── chat/
│   ├── list/
│   └── ...
├── lib/
│   ├── firebase.js
│   ├── chatStore.js
│   ├── userStore.js
│   └── upload.js
├── App.jsx
├── main.jsx
└── ...
```

---

## 🔥 Firebase

Firebase is used for:

* Authentication
* User data
* Chat data
* Real-time message updates

### Firestore Collections

```text
users/
userchats/
chats/
```

The application listens to Firestore documents in real time to keep conversations updated without refreshing the page.

---

## ☁️ Cloudinary

Cloudinary is used to upload and host chat images.

The image upload flow is:

```text
User selects image
        ↓
React
        ↓
Cloudinary
        ↓
Image URL
        ↓
Firestore
```

The image URL is stored with the message and displayed inside the conversation.

---

## 🔐 Environment Variables

Create a `.env` file in the project root and add your project environment variables.

Example:

```env
YOUR_FIREBASE_VARIABLE=your_value
YOUR_CLOUDINARY_VARIABLE=your_value
YOUR_CLOUDINARY_VARIABLE=your_value
```

> Do not commit your `.env` file to GitHub.

The project is configured to ignore environment files using `.gitignore`.

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/saadsayed15/react-firebase-chat.git
```

Navigate to the project:

```bash
cd react-firebase-chat
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will run locally using Vite.

---

## 🏗️ Production Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🚀 Deployment

The application is deployed using Vercel.

### Vercel Configuration

```text
Framework: Vite
Build Command: npm run build
Output Directory: dist
```

Environment variables must also be added to the Vercel project settings.

---

## 🔒 Firestore Security

Firestore access is restricted to authenticated users.

The current rules allow authenticated users to access the application data:

```js
allow read, write: if request.auth != null;
```

For a production application, more granular rules can be added to restrict access based on users, conversations, and document ownership.

---

## 📱 Main Functionality

### Authentication

Users can create an account and sign in using Firebase Authentication.

### User Search

Users can search for other registered users and start a conversation.

### Real-Time Messaging

Messages are stored in Firestore and synchronized in real time between users.

### Image Sharing

Users can select an image from their device. The image is uploaded to Cloudinary and its URL is stored with the message.

### Emoji Support

The application includes an emoji picker for messages.

### Blocking Users

Users can block other users and prevent them from sending messages.

---

## 📚 What I Learned

Through this project, I practiced:

* Building a real-time application with React
* Working with Firebase Authentication
* Managing Firestore data
* Using Firestore real-time listeners
* Managing global state with Zustand
* Uploading images with Cloudinary
* Handling asynchronous operations
* Structuring a React application
* Deploying a Vite application with Vercel
* Managing environment variables
* Debugging production deployment issues

---

## 🔮 Future Improvements

* Online/offline user status
* Typing indicators
* Message deletion
* Message editing
* Read receipts
* Push notifications
* Voice and video calls
* More advanced Firestore security rules

---

## 👨‍💻 Author

**Saad Sayed**

Frontend Developer

GitHub:
https://github.com/saadsayed15

---

## 📄 License

This project is created for learning and portfolio purposes.
