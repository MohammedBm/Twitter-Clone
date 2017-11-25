import React from 'react';
import styled from 'styled-components/native'

import { fakeAvatar } from '../../utils/constants'

const AVATAR_SIZE = 50  ;
const AVATAR_RADIUS = 50;

const Root = styled.View`
  height: 50;
  flexDirection:row;
  alignItems: center;
`;

const AvatarContainer = styled.View`
  flex:0.2;
  paddingLeft: 5;
  justifyContent: center;
  alignSelf: stretch;
`
const MetaContainer = styled.View`
  flex: 1;
  alignSelf: stretch;
`

const Avatar = styled.Image`
  height: ${AVATAR_SIZE};
  width: ${AVATAR_RADIUS};
  borderRadius: 20;
`

const MetaTopContainer = styled.View`
  flex: 1;
  alignSelf: stretch;
  flexDirection: row;
  alignItems: center;
  justifyContent: flex-start;
`

const MetaBottomContainer = styled.View`
  flex: 0.8;
  alignSelf: stretch;
  alignItems: flex-start;
  justifyContent: center;
`
const MetaFullName = styled.Text`
  fontSize: 16;
  fontWeight: bold;
  color: ${props => props.theme.SECONDARY};
`

const MetaText = styled.Text`
  fontSize: 14;
  fontWeight:400;
  color: ${props => props.theme.LIGHT_GRAY};
`

const username =  'MohmedBz';
const firstName = 'Mohammed';
const lastName = 'Bamhraz';
const createdAt = '1 day ago'
const avatar = fakeAvatar;

class FeedCardHeader extends React.Component {
  render() {
    return (
      <Root>
        <AvatarContainer>
          <Avatar source={{uri: avatar}} />
        </AvatarContainer>
        <MetaContainer>
          <MetaTopContainer>
            <MetaFullName>
              {firstName} {lastName}
            </MetaFullName>
            <MetaText style={{ marginLeft: 5 }}>
              @{username}
            </MetaText>
          </MetaTopContainer>
          <MetaBottomContainer>
            <MetaText>
              {createdAt}
            </MetaText>
          </MetaBottomContainer>
        </MetaContainer>
      </Root>
    )
  }
}

export default FeedCardHeader;
