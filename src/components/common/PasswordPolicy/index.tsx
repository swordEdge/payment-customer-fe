import { PasswordPolicyComponentStyle } from './index.style';
import {
  PasswordPolicyFailureSvg,
  PasswordPolicySuccessSvg,
} from 'assets/icons';
import { VALIDATION } from 'consts';
import React, { useEffect } from 'react';

const PasswordRegEx = [
  {
    regEx: VALIDATION.PASSWORD_VALIDATION.LENGTH,
    description: 'At least 8 characters',
  },
  {
    regEx: VALIDATION.PASSWORD_VALIDATION.UPPERCASE,
    description: 'At least 1 upper case alphabet',
  },
  {
    regEx: VALIDATION.PASSWORD_VALIDATION.NUMBER,
    description: 'At least 1 numeric character',
  },
  {
    regEx: VALIDATION.PASSWORD_VALIDATION.SPECIAL,
    description: 'At least 1 special character (such as &, # and $)',
  },
];

type PasswordPolicyComponentProps = {
  password: string;
};

export const PasswordPolicyComponent: React.FC<
  PasswordPolicyComponentProps
> = ({ password }) => {
  return (
    <PasswordPolicyComponentStyle>
      <ul className='ul-list'>
        {PasswordRegEx.map((el, index) => {
          return (
            <li
              key={index}
              style={
                password
                  ? {
                    listStyleImage: `url(${el.regEx.test(password)
                      ? PasswordPolicySuccessSvg
                      : PasswordPolicyFailureSvg
                      }`,
                  }
                  : {}
              }
            >
              {el.description}
            </li>
          );
        })}
      </ul>
    </PasswordPolicyComponentStyle>
  );
};
