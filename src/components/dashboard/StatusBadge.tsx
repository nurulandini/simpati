interface Props {
  status: string;
}

const statusStyle: Record<
  string,
  {
    bg: string;
    text: string;
    dot: string;
  }
> = {
  Final: {
    bg: "bg-green-100",
    text: "text-green-700",
    dot: "bg-green-500",
  },
  Draft: {
    bg: "bg-amber-100",
    text: "text-amber-700",
    dot: "bg-amber-500",
  },
  Revisi: {
    bg: "bg-sky-100",
    text: "text-sky-700",
    dot: "bg-sky-500",
  },
  Ditolak: {
    bg: "bg-red-100",
    text: "text-red-700",
    dot: "bg-red-500",
  },
};

function StatusBadge({ status }: Props) {
  const color = statusStyle[status] ?? {
    bg: "bg-slate-100",
    text: "text-slate-700",
    dot: "bg-slate-500",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${color.bg} ${color.text}`}
    >
      <span className={`h-2 w-2 rounded-full ${color.dot}`} />
      {status}
    </span>
  );
}

export default StatusBadge;