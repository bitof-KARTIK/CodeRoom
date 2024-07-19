
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
![Screenshot 2024-07-20 002845](https://github.com/user-attachments/assets/8e4460e9-8502-4e40-9023-48f1246020ce)


### Browse Page
![Screenshot 2024-07-20 002858](https://github.com/user-attachments/assets/d7737f28-3ffa-4140-98d0-c92952b3cb86)

![Screenshot 2024-07-20 003034](https://github.com/user-attachments/assets/cb307a11-1b8c-4714-aadc-ee3eacbe8e11)


### Create Room Page
![Screenshot 2024-07-20 003143](https://github.com/user-attachments/assets/12b56a09-83e5-477c-8303-ca202d40c8a6)


### Meeting Page
![Screenshot 2024-07-20 002947](https://github.com/user-attachments/assets/a36c31ca-dd3b-44be-8caa-5422107383aa)


### Your Rooms Page
![Screenshot 2024-07-20 003048](https://github.com/user-attachments/assets/6a8ad832-0238-4f77-9dad-34bd8418faff)


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

This project is licensed under the MIT License

## Acknowledgements

- Thanks to all the open-source projects and libraries used in this project.

## Contact

Kartik Shah - [kartik26op@gmail.com](mailto:kartik26op@gmail.com)
