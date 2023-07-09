import {Question} from "../models/question";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
interface QuestionProps {
	question: Question;
	chooseAnswer: (elt: string,id: string) => void;

}
export const QuestionComponent: React.FC<QuestionProps>=({
	question,
	chooseAnswer,
}) => {
	return (
		<Card className="mt-2 p-2" style={{width: "60rem"}}>
			<Card.Title>{question.question}?</Card.Title>
			<Card.Body>
				<Form>
					{question.options.map((elt) => (
						<Form.Check
							type="radio"
							label={elt}
							name="answer"
							value={elt}
							onChange={() => chooseAnswer(elt,question.id)}
							inline
						/>
					))}
				</Form>
			</Card.Body>


		</Card>
	);
};
