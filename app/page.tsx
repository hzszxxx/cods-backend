export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>CODS Backend API</h1>
      <p>Welcome to the CODS Backend API</p>
      
      <h2>Available Endpoints:</h2>
      <ul>
        <li>GET /api/health - Health check</li>
        <li>GET /api/checkins?userId=xxx - Get checkins</li>
        <li>POST /api/checkins?userId=xxx - Create checkin</li>
        <li>GET /api/files?userId=xxx - Get files</li>
        <li>DELETE /api/files?userId=xxx&fileId=xxx - Delete file</li>
      </ul>

      <h2>Quick Test:</h2>
      <code>curl http://localhost:3000/api/health</code>
    </main>
  )
}
