import {
  Card
} from '@mui/material';
import friend from '@site/static/img/cover/docusaurus-zielony-przyjaciel.png';

export function CollapseMe() {
  return (
    <Card elevation={2} sx={{ p: 2 }}>
      <img src={friend} alt="" />
    </Card>
  );
}
