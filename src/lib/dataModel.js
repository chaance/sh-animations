export default data => {
  // reducer callback for grouping objects by property
  const groupByKey = (arr, prop) =>
    arr.reduce((acc, cur) => {
      const key = cur[prop];
      if (!acc[key]) acc[key] = [];
      acc[key].push(cur);
      return acc;
    }, {});

  // Group data by phase so we can work with it a lil bettah
  const dataGroupedByPhase = groupByKey(data, 'attackPhase');

  // Group phases by technique
  const attackPhases = Object.keys(dataGroupedByPhase)
    .map(val => ({
      // assign index for sorting based on order in designs
      i: val.startsWith('recon') ? 0 : val.startsWith('information') ? 1 : 2,
      val,
    }))
    .sort((a, b) => a.i - b.i) // sort by index
    .map(o => {
      // shape the data for our fancy!
      // phases > tactics > techniques
      let techniques = dataGroupedByPhase[o.val];
      const attackPhase = techniques[0].attackPhase;
      techniques = groupByKey(techniques, 'attackTactic');
      const tactics = { ...techniques };
      return { label: attackPhase, tactics };
    });

  // Group techniques by tactic
  // @todo: if there's a preferred sort order, this will need to account for that
  attackPhases.forEach(phase => {
    const tactics = Object.keys(phase.tactics).map(tactic => {
      const techniques = phase.tactics[tactic];
      //console.log({phase: phase.label, techniques});
      return { label: tactic, techniques };
    });
    phase.tactics = tactics;
  });

  return attackPhases;
};
