export const cleanProjectsPalettes = (projects, palettes) => {
  const cleanedData = projects.map(project => {
    const { id, name } = project;
    let projectData =  { id, name, palettes: [] }
    palettes.forEach(palette => {
      if(palette.project_id === project.id){
        projectData.palettes.push(palette)
      }
    });
    return projectData;
  });
  return cleanedData;
}
