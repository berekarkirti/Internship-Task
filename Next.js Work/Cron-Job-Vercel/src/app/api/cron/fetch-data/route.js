import { NextResponse } from "next/server";

export async function GET(request) {
  // Security: Check for a secret key to prevent unauthorized access
  const authHeader = request.headers.get("authorization");
  if (authHeader !== "Bearer my-secret-cron-key") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Fetch data from a dummy API (JSONPlaceholder)
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    // Log the fetched data (tum yaha database mein save kar sakti ho)
    console.log("Cron Job Executed! Fetched Data:", data.slice(0, 2)); // First 2 posts for brevity

    return NextResponse.json({
      message: "Cron job executed successfully!",
      data: data.slice(0, 2),
    });
  } catch (error) {
    console.error("Error in cron job:", error);
    return NextResponse.json(
      { error: "Failed to execute cron job" },
      { status: 500 }
    );
  }
}