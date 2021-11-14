import styled from '@emotion/styled'

const index = (props) => {
  const {
    children,
    type,
    size,
    onClick
  } = props;

  let defaultBg = '#1890ff';
  let defaultPadding = '4px 15px'
  let defaultHeight = 'auto'
  if (type === 'danger') defaultBg = '#ff4d4f';

  if (size === 'small') {
    defaultHeight= '24px';
    defaultPadding = '0 7px';
;
  }

  const Button = styled.button`
    height: ${defaultHeight};
    padding: ${defaultPadding};
    border-color: ${defaultBg};
    background: ${defaultBg};
    font-weight: 400;
    font-size: 14px;
    border-radius: 2px;
    color: white;`

  return (
    <Button onClick={onClick}>{children}</Button>
  )
}

export default index;