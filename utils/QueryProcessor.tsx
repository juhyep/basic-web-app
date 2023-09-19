export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  else if (query.toLowerCase().includes("andrew")) {
    return ("juhyep");
  }
  else if (query.toLowerCase().includes("name")) {
    return ("sally");
  }
  else if (query.toLowerCase().includes("plus")) {
    const addMatch = query.match(/What is (\d+) plus (\d+)/);
    if (addMatch) {
      const x: number = parseInt(addMatch[1]);
      const y: number = parseInt(addMatch[2]);
      return (x+y).toString();
    }
  }
  //Which of the following numbers is the largest: 35, 29, 80?	
  else if (query.toLowerCase().includes("largest")) {
    const largestNum = query.match(/Which of the folling numbers is the largest: (\d+), (\d+), (\d+)/);
    if (largestNum) {
      const x: number = parseInt(largestNum[1]);
      const y: number = parseInt(largestNum[2]);
      const z: number = parseInt(largestNum[3]);
      return (x+y).toString();
    }
  }
  else if (query.toLowerCase().includes("minus")) {
    const subtractMatch = query.match(/What is (\d+) minus (\d+)/);
    if (subtractMatch) {
      const x: number = parseInt(subtractMatch[1]);
      const y: number = parseInt(subtractMatch[2]);
      return (x-y).toString();
    }
  }
  else if (query.toLowerCase().includes("multiplied")) {
    const timesMatch = query.match(/What is (\d+) multiplied by (\d+)/);
    if (timesMatch) {
      const x: number = parseInt(timesMatch[1]);
      const y: number = parseInt(timesMatch[2]);
      return (x*y).toString();
    }
  }
  else if (query.toLowerCase().includes("power")) {
    const powerMatch = query.match(/What is (\d+) to the power of (\d+)/);
    if (powerMatch) {
      const x: number = parseInt(powerMatch[1]);
      const y: number = parseInt(powerMatch[2]);
      return (x**y).toString();
    }
  }


  return "";
}
