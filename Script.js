const prompts = {
  teacher: "Act as a Teacher and explain this to a BTech CSE student in simple way: ",
  hr: "Act as an HR Professional and give interview-ready answer for: ",
  planner: "Act as an Event Planner and give creative plan for: ",
  advisor: "Act as a Career Advisor for a CSE student and guide for: ",
  manager: "Act as a Project Manager and give step-by-step execution plan for: "
};

function generate() {
  let topic = document.getElementById("topic").value;
  let role = document.getElementById("role").value;
  if(!topic) return alert("Pehle topic likho!");

  let finalPrompt = prompts[role] + topic;
  document.getElementById("output").innerText = "Your Prompt Ready (Copy & paste in ChatGPT):\n\n" + finalPrompt + "\n\n--- \nTip: Is prompt ko ChatGPT me dalo, best answer milega!";
}
