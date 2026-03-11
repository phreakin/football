interface Player {
  name: string;
  team: string;
  position: string;
  posColor: string;
  emoji: string;
  grade: number;
  stats: string;
  trend: "up" | "down" | "neutral";
  note: string;
}

function TrendIcon({ trend }: { trend: "up" | "down" | "neutral" }) {
  if (trend === "up") return <span className="text-[#00c853] text-lg">↑</span>;
  if (trend === "down") return <span className="text-[#ef4444] text-lg">↓</span>;
  return <span className="text-gray-500 text-lg">→</span>;
}

export default function PlayerCard({ player, locked }: { player: Player; locked?: boolean }) {
  const gradeColor =
    player.grade >= 85
      ? "#00c853"
      : player.grade >= 70
      ? "#ffd700"
      : "#ef4444";

  return (
    <div className={`relative bg-[#111827] rounded-xl border border-[#1f2937] p-4 card-hover ${locked ? "overflow-hidden" : ""}`}>
      <div className={locked ? "blur-sm select-none pointer-events-none" : ""}>
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#0a0f1e] flex items-center justify-center text-2xl border border-[#1f2937]">
              {player.emoji}
            </div>
            <div>
              <p className="font-bold text-sm">{player.name}</p>
              <div className="flex items-center gap-1 mt-0.5">
                <span
                  className="text-xs font-bold px-1.5 py-0.5 rounded"
                  style={{ background: `${player.posColor}20`, color: player.posColor }}
                >
                  {player.position}
                </span>
                <span className="text-xs text-gray-500">{player.team}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-extrabold border-2"
              style={{ borderColor: gradeColor, color: gradeColor }}
            >
              {player.grade}
            </div>
            <p className="text-xs text-gray-600 mt-0.5">Grade</p>
          </div>
        </div>

        <div className="flex items-center justify-between mb-2">
          <p className="text-xs text-gray-400">{player.stats}</p>
          <TrendIcon trend={player.trend} />
        </div>

        <p className="text-xs text-gray-500 leading-relaxed bg-[#0a0f1e] rounded-lg p-2 border border-[#1f2937]">
          {player.note}
        </p>
      </div>

      {locked && (
        <div className="absolute inset-0 lock-overlay flex flex-col items-center justify-center rounded-xl">
          <span className="text-3xl mb-2">🔒</span>
          <p className="text-sm font-bold text-white">Premium Content</p>
          <p className="text-xs text-gray-400 mt-1">Subscribe to unlock</p>
        </div>
      )}
    </div>
  );
}

export type { Player };
