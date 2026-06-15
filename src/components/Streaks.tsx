
type streakProps = {
  streakCount:number
}

function Streaks({streakCount}:streakProps) {
  return (
    <div className="bg-white pl-1 pr-2 rounded-2xl">
        <p>🔥 {streakCount}</p>
    </div>
  )
}

export default Streaks