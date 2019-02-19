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

  // Make an array of attack phases for the hexes
  const attackPhases = Object.keys(dataGroupedByPhase)
    .map(val => ({
      // assign index for sorting based on order in designs
      i: val.startsWith('recon') ? 0 : val.startsWith('information') ? 1 : 2,
      val
    }))
    .sort((a, b) => a.i - b.i) // sort by index
    .map(o => {
      // shape the data for our fancy!
      // phases > tactics > techniques
      let techniques = dataGroupedByPhase[o.val];
      const label = techniques[0].attackPhase;
      techniques = groupByKey(techniques, 'attackTactic');
      const tactics = { ...techniques };
      return { label, tactics };
    });

  return attackPhases;
};
