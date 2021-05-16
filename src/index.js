import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () =>  {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail 
					author="Arturo" 
					postedTime="Today at 4:45PM" 
					text="Hello there!" 
					profileImage={faker.image.avatar()}
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail	
					author="Paola" 
					postedTime="Today at 5:45PM" 
					text="Wow it's late!" 
					profileImage={faker.image.avatar()}
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail
					author="Juan"
					postedTime="Today at 6:45PM"
					text="Never too late to say hi!!"
					profileImage={faker.image.avatar()}
				/>
			</ApprovalCard>
		</div>

	);
};

ReactDOM.render(<App/>, document.querySelector('#root'));