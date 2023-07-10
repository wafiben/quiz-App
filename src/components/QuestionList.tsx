import {data} from "../data/questions";
import {QuestionComponent} from "./Question";
import {Question} from "../models/question";
import {useEffect,useState} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export const QuestionList: React.FC=() => {
	const [show,setShow]=useState<boolean>(false);
	const [list]=useState<Question[]>(data);
	const [score,setScore]=useState<number>(0);
	const [answers,setAnswers]=useState({});
	const [idsOfAnswerdQuestions,setIdsOfAnswerdQuestions]=useState<string[]>([]);
	console.log(idsOfAnswerdQuestions)
	const [disabled,setDisabled]=useState<boolean>(false);

	const [idsOfQuestions,setIdsQuesions]=useState<string[]>([]);

	const chooseAnswer=(text: string,idOfQuestion: string): void => {
		const question=list.find((elt) => elt.id===idOfQuestion);
		if(question) {
			if(text===question.correctAnswer) {
				let tem=score+1;
				setScore(tem);
			} else if(text!==question.correctAnswer&&score>0) {
				let tem=score-1;
				console.log(tem)
				setScore(tem);
			}
		}
		let temp={...answers,[idOfQuestion]: text};
		setAnswers(temp);
	};
	const getEval=(): void => {
		setShow(!show);
	};
	useEffect(() => {
		setIdsQuesions(data.map((elt) => elt.id).sort());
	},[]);

	useEffect(() => {
		const idsOfAnswerdQuestions=Object.keys(answers).sort();
		setIdsOfAnswerdQuestions(idsOfAnswerdQuestions);
		const tablesAreEqual=
			idsOfAnswerdQuestions.length===idsOfQuestions.length&&
			idsOfQuestions.every(
				(element,index) => element===idsOfAnswerdQuestions[index]
			);
		setDisabled(!tablesAreEqual);
	},[answers,idsOfQuestions]);

	return (
		<Card className="m-3">
			<div className="d-flex justify-content-center align-items-center flex-column">
				{list.map((elt) => (
					<QuestionComponent
						question={elt}
						key={elt.id}
						chooseAnswer={chooseAnswer}
					/>
				))}
			</div>
			<div className="m-3">
				<Button variant="primary" disabled={disabled} onClick={() => getEval()}>
					get my evaluation
				</Button>
			</div>
			{show&&<div>your Score is {score}</div>}
		</Card>
	);
};
