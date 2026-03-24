type Status = 'empty' | 'completed' | 'streak';

interface Props {
  status: Status;
  isToday?: boolean;
}

export default function StreakDayIndicator({ status, isToday }: Props) {
  const baseStyle =
    "w-10 h-10 rounded-full flex items-center justify-center";

  const getStyle = () => {
    switch (status) {
      case 'completed':
        return "bg-yellow-400";
      case 'streak':
        return "bg-yellow-400";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className={`${baseStyle} ${getStyle()}`}>
      {status === 'streak' && (
        <img src="/fire.svg" alt="streak" className="w-4 h-4" />
      )}
    </div>
  );
}