export function StatCard({ value, label, icon: Icon }) {
  return (
    <article className="stat-card">
      <span className="stat-card__icon">
        <Icon size={22} aria-hidden="true" />
      </span>
      <strong>{value}</strong>
      <p>{label}</p>
    </article>
  );
}
