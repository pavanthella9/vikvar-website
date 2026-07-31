type Step = {
  number: string;
  title: string;
  description: string;
};

export function ProcessTimeline({ steps }: { steps: Step[] }) {
  return (
    <div className="v-process-grid">
      {steps.map((step) => (
        <article key={step.number} className="v-process-step">
          <span className="v-process-number">{step.number}</span>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </article>
      ))}
    </div>
  );
}
