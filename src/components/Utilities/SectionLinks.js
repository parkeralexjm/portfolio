export const handleClickScrollHero = () => {
  const element = document.getElementById('hero'); 
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const handleClickScrollAbout = () => {
  const element = document.getElementById('about'); 
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const handleClickScrollProjects = () => {
  const element = document.getElementById('projects'); 
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const handleClickScrollContact = () => {
  const element = document.getElementById('contact'); 
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};