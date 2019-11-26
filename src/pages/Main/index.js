import React, { Component } from 'react';

import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import Container from '../../components/container';
import { Form, SubmitButton, List } from './styles';

import api from '../../services/api';

export default class Main extends Component {
   state = {
      newRepository: '',
      repositories: [],
      loading: false,
      error: false,
   };

   componentDidMount() {
      const repositories = localStorage.getItem('repositories');

      if (repositories) {
         this.setState({ repositories: JSON.parse(repositories) });
      }
   }

   componentDidUpdate(_, prevState) {
      const { repositories } = this.state;

      if (repositories !== prevState.repositories) {
         localStorage.setItem('repositories', JSON.stringify(repositories));
      }
   }

   handleInputChange = e => {
      this.setState({ newRepository: e.target.value });
   };

   handleSubmit = async e => {
      e.preventDefault();

      this.setState({ loading: true });

      const { newRepository, repositories } = this.state;

      try {
         if (newRepository === '')
            throw new Error('Indique um repositório para ser adicionado');

         const repoAlreadyAdd = repositories.find(
            r => r.name === newRepository
         );

         if (repoAlreadyAdd)
            throw new Error('Este repositório já foi adicionado');

         const response = await api.get(`/repos/${newRepository}`);

         const repoData = {
            name: response.data.full_name,
         };

         this.setState({
            repositories: [...repositories, repoData],
            newRepository: '',
            error: false,
         });

         toast.success('Novo repositório adicionado.');
      } catch (err) {
         if (err.response && err.response.status === 404) {
            toast.error('Repositório não encontrado.');
         } else {
            toast.error(String(err).split('Error:')[1]);
         }

         this.setState({ error: true });
      } finally {
         this.setState({ loading: false });
      }
   };

   handleRemove = repo => {
      this.setState(prevState => ({
         repositories: prevState.repositories.filter(
            repos => repos.name !== repo
         ),
      }));
   };

   render() {
      const { newRepository, repositories, loading, error } = this.state;

      return (
         <Container>
            <h1>
               <FaGithubAlt />
               Repositórios
            </h1>

            <Form onSubmit={this.handleSubmit} error={error}>
               <input
                  type="text"
                  placeholder="Adicionar repositório"
                  value={newRepository}
                  onChange={this.handleInputChange}
               />

               <SubmitButton isLoading={loading}>
                  {loading ? (
                     <FaSpinner color="#FFF" size={14} />
                  ) : (
                     <FaPlus color="#fff" size={14} />
                  )}
               </SubmitButton>
            </Form>

            <List>
               {repositories.map(repository => (
                  <li key={repository.name}>
                     <span>{repository.name}</span>
                     <div>
                        <Link
                           to={`/repository/${encodeURIComponent(
                              repository.name
                           )}`}
                        >
                           Detalhes
                        </Link>
                        <MdDelete
                           onClick={() => this.handleRemove(repository.name)}
                        />
                     </div>
                  </li>
               ))}
            </List>
         </Container>
      );
   }
}
