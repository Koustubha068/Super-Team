const teamMembers = [
  {
    position:'Student',
    name: 'Sheldon Lee Sheldon',
    skills: ['Advanced Intellectual Abilities', 'Great Memory and Knowledge', 'Technological Proficiency'],
    strengths: 'Communication, Intelligence, Honest',
    weaknesses: 'Germaphobic, Socializing',
    description : 'Sheldon Cooper, a child prodigy with a towering intellect and an insatiable curiosity, navigates the complexities of growing up in East Texas while pursuing his passion for science and learning.',
    img: 'images/sheldon.png'
  },
  {
    position:'Pastor',
    name: 'Pastor Jeff',
    skills: ['Good at Public Speaking', 'He is a very good mentor', 'Very good at handling challenges'],
    strengths: 'Communication, Emphatethic, Great Leadership',
    weaknesses: 'naive, avoids conflict,overcommittment',
    description : 'Pastor Jeff Difford is a well-meaning and empathetic minister in "Young Sheldon," known for his engaging sermons, strong moral compass, and ability to connect with his congregation through humor and compassion, despite occasional naivety and a tendency to avoid confrontation',
    img: 'images/pastor jef.png'
  },
  {
    position:'Student',
    name: 'Paige',
    skills: ['Advanced Intellectual Abilities', 'Analytical and Problem-Solving Skills', 'Creativity and Innovation'],
    strengths: 'Communication, Intelligence, Curiosity',
    weaknesses: 'Difficulty of Fitting In, Overthinking',
    description : 'Paige Swanson is a highly intelligent and talented child prodigy who excels in academics, particularly in mathematics and science, and shares a friendly rivalry with Sheldon Cooper. Despite her impressive intellect, she faces significant emotional challenges, including pressure to perform, social isolation, and family tensions, which add depth to her character in "Young Sheldon."',
    img: 'images/paige.png'
  },
  {
    position:'Student',
    name: 'Missy Cooper',
    skills: ['Social Intelligence', 'Creative', 'Sense of Humour'],
    strengths: 'Communication, Physically Strong, Curiosity',
    weaknesses: 'Impatient, Overconfidence',
    description : 'Missy Cooper, Sheldons twin sister in "Young Sheldon," is a socially adept and athletically talented teenager who balances her competitive spirit with a caring nature, often providing support and levity within the Cooper family dynamic. Despite her strengths, she grapples with impulsiveness and a search for direction, adding depth to her characters journey of self-discovery.',
    img: 'images/missy cooper.png'
  },
  {
    position:'Gambler',
    name: 'Meemaw',
    skills: ['Wisdom', 'Life Experience', 'Unconditional Love and Support'],
    strengths: 'Logical, Sympathetic, Honest',
    weaknesses: 'Stubborn, Overprotective ,Impatient',
    description : 'Meemaw, the matriarch of the Cooper family in "Young Sheldon," is a formidable and nurturing presence, known for her sharp wit, unwavering love for her family, and practical wisdom. While her strength and resilience are undeniable, she also grapples with vulnerabilities such as stubbornness and a reluctance to express vulnerability, adding depth to her character and enriching the dynamic of the show.',
    img: 'images/meemaw.png'
  },
  {
    position:'Church worker',
    name: 'Marry Cooper',
    skills: ['Strength/Resillience', 'Strong Moral Compass', 'Sense of Humor and Levity'],
    strengths: 'Communication, Religious, Resillient',
    weaknesses: 'Difficulty of Fitting In, Overthinking',
    description : 'Mary Cooper, the devoted mother in "Young Sheldon," exudes warmth, compassion, and unwavering support for her family, navigating the challenges of raising her unique children with grace and resilience. Her nurturing nature, coupled with her strong moral compass and sense of humor, makes her the heart and backbone of the Cooper household.',
    img: 'images/mary cooper.png'
  },
  {
    postion: 'Proffesor',
    name: 'John Sturgis',
    skills: ['Academic Excellence', 'Teaching and Mentorship', 'Problem-Solving and Analytical Thinking'],
    strengths: 'Communication, emphathy, Curiosity',
    weaknesses: 'overcommitment, struggles with mental health',
    description : 'John Sturgis, the brilliant physicist and mentor in "Young Sheldon," is known for his exceptional intellect, passion for teaching, and warm-hearted nature. Despite his struggles with balancing work and personal life, and occasional eccentricities, his dedication to his students, including Sheldon, shines through, making him an integral part of the Cooper familys journey.',
    img: 'images/john sturgis.png'
  },
  {
    position:'Student',
    name: 'Georgie Cooper',
    skills: ['Very good at football', 'Good Salesemen', 'Street Smart'],
    strengths: 'Atheltic, Communication, Loyal',
    weaknesses: 'Impulsive, Impatient ,Lack of Academic focus ',
    description : 'Georgie Cooper, the eldest son in "Young Sheldon," is a charismatic and athletic teenager known for his leadership on the football field and his protective instincts towards his family, especially his younger brother Sheldon. Despite his academic struggles and occasional impulsiveness, Georgies loyalty, street smarts, and natural leadership qualities make him an integral part of the Cooper family dynamic, adding depth and complexity to the series.',
    img: 'images/georgie copper.png'
  },
  {
    position:'Coach',
    name: 'George Cooper',
    skills: ['mechanical skills', 'communication skills', 'good work ethic'],
    strengths: 'dedicated family member, protective, Resillient',
    weaknesses: 'Stubborness, Communication Challenges',
    description : 'George Cooper Sr. in "Young Sheldon" is a hardworking and devoted family man who prioritizes providing for his loved ones, often juggling the demands of his job at the factory with his responsibilities at home. Despite his steadfast dedication, George grapples with communication challenges and stubbornness, adding depth to his character as he navigates the ups and downs of family life in 1980s Texas..',
    img: 'images/george cooper.png'
  },
  {
    position:'Coach',
    name: 'Dale Ballard',
    skills: ['Analytical and Observational Skills', 'Interpersonal Skills and Charisma', 'Physical and Survival Skills'],
    strengths: 'Communication, emphathy, Loyalty',
    weaknesses: 'Rude, Gambles too much',
    description : 'Dale is a vital character in "Young Sheldon" who dates the character Meemaw and coaches Missy',
    img: 'images/dale ballard.png'
  },
]
function generateTeamCards() {
  const teamCardsContainer = document.getElementById("teamCards");
  teamMembers.forEach((member) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4");

    //styling card based on position:
    let backgroundColor;
    switch (member.position) {
      case 'Student':
        backgroundColor = '#ffc107'; // Yellow for Student
        break;
      case 'Pastor':
        backgroundColor = '#28a745'; // Green for Pastor
        break;
      case 'Proffesor':
        backgroundColor = '#007bff'; // Blue for Proffesor
        break;
      case 'Coach':
        backgroundColor = '#dc3545'; // Red for Coach
        break;
      default:
        backgroundColor = '#6c757d'; // Gray for other positions
    }
    
 
    card.style.backgroundColor = backgroundColor;
   
  
    //create a list of skils with li tags
    const skillsList = member.skills
      .map((skill) => `<li> ${skill} </li>`)
      .join("");

      card.innerHTML = `
      <div class="card">
        <div class="card-header">${member.name}</div>
        <div class="card-body">
          <p><strong>Position:</strong> ${member.position}</p>
          <p><strong>Skills:</strong><ul>${skillsList}</ul></p>
          <p><strong>Strengths:</strong> ${member.strengths}</p>
          <p><strong>Weaknesses:</strong> ${member.weaknesses}</p>
          <p><strong>Description:</strong> ${member.description}</p>
          <p><strong>Image:</strong> <img src="${member.img}" alt="${member.name}" class="img-fluid"></p>
        </div>
      </div>
    `;
    teamCardsContainer.appendChild(card);
  });
}
window.onload = generateTeamCards();


