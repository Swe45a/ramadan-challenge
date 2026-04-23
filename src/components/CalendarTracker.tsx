interface Props {
  completedDays: number[];
  currentDay: number;
}

export default function CalendarTracker({ completedDays, currentDay }: Props) {
  const totalDays = 30;

  return (
    <div 
    className="bg-white rounded-3xl shadow-xl p-6 border-2 border-orange-100">
      <h2 className="text-xl font-bold mb-4 text-orange-600">
        رحلتك في رمضان
      </h2>

      <div className="grid grid-cols-6 gap-2">
        {Array.from({ length: totalDays }, (_, i) => {
          const day = i + 1;
          const isCompleted = completedDays.includes(day);
          const isCurrent = day === currentDay;

          return (
            <div
              key={day}
              className={`
                aspect-square rounded-lg flex items-center justify-center font-bold
                ${isCompleted ? "bg-orange-500 text-white" :
                  isCurrent ? "bg-orange-200 text-orange-800 ring-2 ring-orange-400" :
                  "bg-gray-100 text-gray-500"}
              `}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}
