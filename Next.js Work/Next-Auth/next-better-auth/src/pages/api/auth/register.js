import { connectToDatabase } from "@/lib/mongodb";
import { hashPassword } from "@/utils/hashPassword";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const db = await connectToDatabase();
  const existingUser = await db.collection("users").findOne({ email });

  if (existingUser) {
    return res.status(409).json({ message: "User already exists" });
  }

  const hashedPassword = await hashPassword(password);
  const user = await db.collection("users").insertOne({ email, password: hashedPassword });

  res.status(201).json({ message: "User registered successfully", userId: user.insertedId });
}
