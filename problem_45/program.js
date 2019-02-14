/*
walking robot  
Problem statement
Given a robot which can only move in four directions, UP(U), DOWN(D), LEFT(L), RIGHT(R). Given a string consisting of instructions to move.
  Output the co-ordinates of robot after the executing the instructions. Initial position of robot is at origin(0, 0).
 
Examples:
 
Input : move = "UDDLRL" 
Output : (-1, -1)
Move U : (0, 0)--(0, 1)
Move D : (0, 1)--(0, 0)
Move D : (0, 0)--(0, -1)
Move L : (0, -1)--(-1, -1)
Move R : (-1, -1)--(0, -1)
Move L : (0, -1)--(-1, -1)
 
Therefore final position after the complete
movement is: (-1, -1)
 
Input : move = "UDDLLRUUUDUURUDDUULLDRRRR"
Output : (2, 3) 

*/

//[0,0]


function moveRobot(dir, pos) {
	if (dir === "U") {
		pos[1] = pos[1]  + 1;
		return pos;
	}

	if (dir === "D") {
		pos[1] = pos[1]  - 1;
		return pos;
	}

	if (dir === "L") {
		pos[0] = pos[0]  - 1;
		return pos;
	}

	if (dir === "R") {
		pos[0] = pos[0]  + 1;
		return pos;
	}
}

function gerRobotPos(initial, dirstring) {
	let dirarr = dirstring.split("");
	for (let i = 0; i < dirarr.length; i ++) {
		initial =  moveRobot(dirarr[i], initial);
	}
	return initial;
}