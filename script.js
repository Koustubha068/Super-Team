const teamMembers = [
  {
    name: 'Sheldon Lee Sheldon',
    skills: ['Advanced Intellectual Abilities', 'Great Memory and Knowledge', 'Technological Proficiency'],
    strengths: 'Communication, Intelligence, Honest',
    weaknesses: 'Germaphobic, Socializing',
    description : 'Sheldon Cooper, a child prodigy with a towering intellect and an insatiable curiosity, navigates the complexities of growing up in East Texas while pursuing his passion for science and learning.',
    img: ''
  },
  {
    name: 'Hrithik Roshan',
    position: 'All-rounder',
    skills: ['Acting', 'Dancing', 'Modeling'],
    strengths: 'Physique, Dance skills, Screen presence',
    weaknesses: 'Typecasting, Public perception',
    biography: 'Hrithik Roshan is an Indian actor known for his dancing skills and performance in Hindi films.',
    bestMovie: 'Koi Mil Gaya',
    img: 'image/hritick.PNG'
  },
  {
    name: 'Siddharth Malhotra &#11088 ( Captain) ',
    position: 'Batsman',
    skills: ['Acting', 'Modeling'],
    strengths: 'Looks, Versatility',
    weaknesses: 'Limited filmography',
    biography: 'Siddharth Malhotra is an Indian actor and former model who appears in Hindi films.',
    bestMovie: 'Student of the Year',
    img: 'image/sid.PNG'
  },
function generateTeamCards() {
  const teamCardsContainer = document.getElementById("teamCards");
  teamMembers.forEach((member) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4");

    //styling card based on position:
    let backgroundColor;
    switch (member.position) {
      case "forward":
        backgroundColor = "#EF767A";
    }
    card.style.backgroundColor = backgroundColor;

    //create a list of skils with li tags
    const skillsList = member.skills
      .map((skill) => `<li> ${skill} </li>`)
      .join("");

    card.innerHTML = `
    <div class= "card">
    <div class ="card-header"> ${member.name}</div>
    <div class="card-body">
    <p><strong><Position:</strong> ${member.position}</p>
    <p><strong><Skills:</strong> </p>
    <ul>
    ${skillsList}
    </ul>
    <p><strong>Strengths:</strong> ${member.strengths}</p>
    <p><strong>Weakness:</strong> ${member.weaknesses}</p>
    <p><strong>Biography:</strong> ${member.biography}</p>


    

    </div>
    </div>
    `;
    teamCardsContainer.appendChild(card);
  });
}
window.onload = generateTeamCards();
