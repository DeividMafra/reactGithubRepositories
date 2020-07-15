import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repository } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Github repository</Title>

      <Form>
        <input placeholder="Type the repository name" />
        <button type="submit">Search</button>
      </Form>

      <Repository>
        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/47677234?s=460&u=3eb48a6c938b514db9520e34fc08bada12df808c&v=4"
            alt="Deivid Mafra"
          />
          <div>
            <strong>DeividMafra/JobPortal</strong>
            <p>A job portal front-end developed in Angular</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/47677234?s=460&u=3eb48a6c938b514db9520e34fc08bada12df808c&v=4"
            alt="Deivid Mafra"
          />
          <div>
            <strong>DeividMafra/JobPortal</strong>
            <p>A job portal front-end developed in Angular</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/47677234?s=460&u=3eb48a6c938b514db9520e34fc08bada12df808c&v=4"
            alt="Deivid Mafra"
          />
          <div>
            <strong>DeividMafra/JobPortal</strong>
            <p>A job portal front-end developed in Angular</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repository>
    </>
  );
};

export default Dashboard;
