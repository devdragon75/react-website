# How to Run Your Website with Docker

Welcome! Here’s how you can view your website using Docker in just a few steps.

---

## 1. Install Docker Desktop
- Download and install Docker Desktop for your operating system:
  - [Docker Desktop Download](https://www.docker.com/products/docker-desktop/)
- Launch Docker Desktop after installation.

---

## 2. Pull the Website Image from Docker Hub
Open your terminal (Command Prompt, PowerShell, or Terminal) and run:

```
docker pull devdragon75/my-react-app:latest
```

---

## 3. Run the Website in a Container
Run this command in your terminal:

```
docker run -p 8080:80 devdragon75/my-react-app:latest
```

- This will start the website and make it available at: [http://localhost:8080](http://localhost:8080)
- If port 8080 is in use, you can change it (e.g., `-p 3000:80` for [http://localhost:3000](http://localhost:3000)).

---

## 4. View the Website
- Open your web browser and go to: [http://localhost:8080](http://localhost:8080)

---

## 5. Stopping the Website
- To stop the website, go to the terminal where it’s running and press `Ctrl + C`.

---

## Need Help?
If you have any questions or issues, just let us know! 