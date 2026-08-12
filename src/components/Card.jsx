function Card({
  icon,
  label,
  title,
  subtitle,
  badge,
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition duration-200">

      <div className="flex items-start justify-between">

        <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-2xl">
          {icon}
        </div>

        {badge && (
          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600">
            {badge}
          </span>
        )}

      </div>

      <div className="mt-5">

        <p className="text-sm font-medium text-slate-500">
          {label}
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 break-words">
          {title}
        </h2>

        <p className="text-xs text-slate-400 mt-2">
          {subtitle}
        </p>

      </div>

    </div>
  );
}

export default Card;