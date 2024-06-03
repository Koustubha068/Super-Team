const teamMembers = [
  {
    name: 'Sheldon Lee Sheldon',
    skills: ['Advanced Intellectual Abilities', 'Great Memory and Knowledge', 'Technological Proficiency'],
    strengths: 'Communication, Intelligence, Honest',
    weaknesses: 'Germaphobic, Socializing',
    description : 'Sheldon Cooper, a child prodigy with a towering intellect and an insatiable curiosity, navigates the complexities of growing up in East Texas while pursuing his passion for science and learning.',
    img: 'images/sheldon.png'
  },
  {
    name: 'Pastor Jeff',
    skills: ['Good at Public Speaking', 'He is a very good mentor', 'Very good at handling challenges'],
    strengths: 'Communication, Emphatethic, Great Leadership',
    weaknesses: 'naive, avoids conflict,overcommittment',
    description : 'Pastor Jeff Difford is a well-meaning and empathetic minister in "Young Sheldon," known for his engaging sermons, strong moral compass, and ability to connect with his congregation through humor and compassion, despite occasional naivety and a tendency to avoid confrontation',
    img: 'images/pastor jef.png'
  },
  {
    name: 'Paige',
    skills: ['Advanced Intellectual Abilities', 'Analytical and Problem-Solving Skills', 'Creativity and Innovation'],
    strengths: 'Communication, Intelligence, Curiosity',
    weaknesses: 'Difficulty of Fitting In, Overthinking',
    description : 'Paige Swanson is a highly intelligent and talented child prodigy who excels in academics, particularly in mathematics and science, and shares a friendly rivalry with Sheldon Cooper. Despite her impressive intellect, she faces significant emotional challenges, including pressure to perform, social isolation, and family tensions, which add depth to her character in "Young Sheldon."',
    img: 'images/paige.png'
  },
  {
    name: 'Missy Cooper',
    skills: ['Social Intelligence', 'Creativity', 'Sense of Humour'],
    strengths: 'Communication, Physically Strong, Curiosity',
    weaknesses: 'Impatient, Overconfidence',
    description : 'Missy Cooper, Sheldon's twin sister in "Young Sheldon," is a socially adept and athletically talented teenager who balances her competitive spirit with a caring nature, often providing support and levity within the Cooper family dynamic. Despite her strengths, she grapples with impulsiveness and a search for direction, adding depth to her character's journey of self-discovery.',
    img: 'images/missy cooper.png'
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
