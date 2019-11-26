import styled from 'styled-components';

export const Loading = styled.div`
   color: #fff;
   font-size: 30px;
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
`;

export const Owner = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

   a {
      text-decoration: none;
      padding: 7px;
      background-color: #1565c0;
      border-radius: 4px;
      color: #fff;
      font-size: 15px;
      display: flex;
      align-items: center;

      svg {
         margin-right: 3px;
      }
   }

   a:hover {
      transition: all 0.2s ease-in;
      background-color: #0d47a1;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
   }

   img {
      width: 120px;
      border-radius: 50%;
      margin-top: 20px;
   }

   h1 {
      font-size: 24px;
      margin-top: 10px;
   }

   p {
      margin-top: 5px;
      font-size: 14px;
      color: #666;
      line-height: 1.4;
      text-align: center;
      max-width: 400px;
   }
`;

export const IssueList = styled.ul`
   padding-top: 15px;
   margin-top: 30px;
   border-top: 1px solid #eee;
   list-style: none;

   li {
      display: flex;
      padding: 15px 10px;
      border: 1px solid #eee;
      border-radius: 4px;

      & + li {
         margin-top: 10px;
      }

      img {
         width: 36px;
         height: 36px;
         border-radius: 50%;
         border: 2px solid #eee;
      }

      div {
         flex: 1;
         margin-left: 15px;
         strong {
            font-size: 14px;

            a {
               text-decoration: none;
               color: #333;

               &:hover {
                  color: #0d47a1;
               }
            }

            span {
               background: #eee;
               color: #333;
               border-radius: 3px;
               font-size: 11px;
               font-weight: 600;
               height: 20px;
               padding: 5px 7px;
               margin-left: 10px;
            }
         }

         p {
            margin-top: 5px;
            font-size: 12px;
            color: #999;
         }
      }
   }
`;

export const IssueFilter = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 15px;

   button {
      border: none;
      padding: 10px 15px;
      font-size: 12px;
      font-weight: bold;
      color: #424242;
      background: #e0e0e0;
      border-radius: 5px;

      & + button {
         margin-left: 10px;
      }

      &:hover {
         transition: all 0.2s ease-in-out;
         color: #212121;
         background: #bdbdbd;
      }

      &:nth-child(${props => props.active + 1}) {
         background: #1565c0;
         color: #fff;
      }
   }
`;

export const PageActions = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
   margin-top: 20px;

   button {
      border: none;
      padding: 7px 12px;
      border-radius: 5px;
      font-weight: bold;
      font-size: 12px;
      color: #424242;
      background: #eee;

      &:hover {
         transition: all 0.2s ease-in-out;
         background: #e0e0e0;
      }

      &:disabled {
         opacity: 0.35;
         cursor: not-allowed;
      }
   }
`;
