import Icon from '@ant-design/icons/lib/components/Icon';


const LogoSvg = (props) => {
  return (
    <svg
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="3em"
      height="3em"
    >
      <path d="M986.074074 739.555556l-170.666667-132.740741V303.407407l170.666667-132.74074a37.925926 37.925926 0 0 1 37.925926 37.925926v493.037037a37.925926 37.925926 0 0 1-37.925926 37.925926z m-256 151.703703h-701.62963a28.444444 28.444444 0 1 1 0-56.888889h701.62963a28.444444 28.444444 0 0 1 0 56.888889zM663.703704 777.481481H94.814815a94.814815 94.814815 0 0 1-94.814815-94.814814V227.555556a94.814815 94.814815 0 0 1 94.814815-94.814815h568.888889a94.814815 94.814815 0 0 1 94.814815 94.814815v455.111111a94.814815 94.814815 0 0 1-94.814815 94.814814zM151.703704 208.592593a75.851852 75.851852 0 1 0 0 151.703703 75.851852 75.851852 0 0 0 0-151.703703z" fill="#fff" p-id="929" data-spm-anchor-id="a313x.manage_type_myprojects.0.i2.4b7f3a81u0vNRU" class="selected"></path>
    </svg>
  )
}

const LogoIcon = (props) => <Icon component={LogoSvg} {...props} />

export {
  LogoIcon
};


