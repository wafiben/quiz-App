import {Question} from "../models/question";

export const data: Question[]=[
	{
		id: "zou-142",
		question: "What is the language used for style",
		options: ["Css","Html","Js"],
		correctAnswer: "Css",
	},
	{
		id: "iou-143",
		question: "Can the browser read jsx",
		options: ["yes","no"],
		correctAnswer: "no",
	},
	{
		id: "iou-145",
		question: "What is redux",
		options: [
			"state management library for handling global state",
			"library for fetching data",
		],
		correctAnswer: "state management library for handling global state",
	},
	{
		id: "iou-146",
		question: "What is the difference between let and var",
		options: [
			"let is used when we have a constant",
			"let stands  for global scope and var for local scope",
			"let stands  for local scope and var for global scope",
		],
		correctAnswer: "let stands  for local scope and var for global scope",
	},
];

