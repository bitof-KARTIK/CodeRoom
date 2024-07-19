Sure, here's the updated README.md file with sections for screenshots:

```markdown
# CodeRoom

CodeRoom is a collaborative platform that allows developers to find each other online and create rooms to code together in real-time. It's designed to facilitate pair programming, code reviews, and collaborative learning.

## Features

- **Browse Code Rooms**: Easily find and join existing coding rooms.
- **Create Code Rooms**: Create new rooms for collaborative coding sessions.
- **Delete Code Rooms**: Room creators can delete their rooms when they are no longer needed.
- **Video Calling**: Integrated video calling using the GetStream API for seamless communication.

## Technologies Used

- **Front-end**: Next.js, Tailwind CSS
- **Database**: Drizzle
- **Authentication**: NextAuth
- **Video Calling**: GetStream API
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Drizzle

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bitof-KARTIK/CodeRoom.git
   cd CodeRoom
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following variables:
   ```env
   DATABASE_URL='yourdatabaseurl'
   GOOGLE_CLIENT_ID='your google client id'
   GOOGLE_CLIENT_SECRET='your google client secret'
   NEXTAUTH_SECRET='your next auth secret'
   NEXT_PUBLIC_GET_STREAM_API_KEY='your getstream api key'
   GET_STREAM_SECRET_KEY='your getstream secret key'
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1. Sign up or log in to your account.
2. Browse or create a new code room.
3. Start coding collaboratively in real-time!
4. Use video calling to communicate with other developers in the room.

## Screenshots

### Landing Page
![Landing Page](path/to/landing-page-screenshot.png)

### Browse Page
![Browse Page](path/to/browse-page-screenshot.png)

### Create Room Page
![Create Room Page](path/to/create-room-page-screenshot.png)

### Meeting Page
![Meeting Page](path/to/meeting-page-screenshot.png)

### Your Rooms Page
![Your Rooms Page](path/to/your-rooms-page-screenshot.png)

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the code style and include tests for your changes.

1. Fork the repository
2. Create your feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add your feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to all the open-source projects and libraries used in this project.

## Contact

Kartik Shah - [kartik26op@gmail.com](mailto:kartik26op@gmail.com)

Project Link: [https://github.com/bitof-KARTIK/CodeRoom](https://github.com/bitof-KARTIK/CodeRoom)
```

Replace `path/to/...-screenshot.png` with the actual paths to your screenshot images. Let me know if you need any more changes!
