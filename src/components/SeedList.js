import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Image, Icon, Grid } from 'semantic-ui-react'

import { Table } from 'semantic-ui-react'

const DeviceList = ({ devices }) => {
  if (devices && devices.length > 0) {
    return (<div>
      Devices:
    <ul>
        {devices.map(device =>
          <li key={device.identity}>{device.identity}</li>
        )}
      </ul>
    </div>)
  } else {
    return (<div />)
  }


  /*return (<div>
   <div className="ui mini statistic">
     <div className="label">Devices</div>
     <div className="value">{devices.length}</div>
   </div>
 </div>)*/
}

const Orig_SeedList = ({ seeds }) => (
  <div>
    <h2>Seeds</h2>
    <Table striped celled >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Identity</Table.HeaderCell>
          <Table.HeaderCell>User's name</Table.HeaderCell>
          <Table.HeaderCell>Companion device UUID</Table.HeaderCell>
          <Table.HeaderCell>Facebook Id</Table.HeaderCell>
          <Table.HeaderCell>Devices</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {seeds.map(seed =>
          <Table.Row key={seed.identity}>
            <Table.Cell>
              <Link to={`/seeds/${seed.identity}`}>{seed.identity}</Link>
            </Table.Cell>
            <Table.Cell>
              {seed.owner && seed.owner.name ? seed.owner.name : ''}
            </Table.Cell>
            <Table.Cell>
              {seed.companionUUID ? seed.companionUUID : ''}
            </Table.Cell>
            <Table.Cell>
              {seed.facebookID ? seed.facebookID : ''}
            </Table.Cell>
            <Table.Cell>
              <DeviceList devices={seed.devices} />
            </Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  </div>
)







const SeedList = ({ seeds }) => (
  <Card.Group>
    {seeds.map(seed =>
      <Card fluid key={seed.identity}>
        <Card.Content>
          <Grid centered columns={2}>
            <Grid.Column computer={3}>
              <Image floated='left' size='small' src={seed.facebookID ? `http://graph.facebook.com/${seed.facebookID}/picture?type=square` : 'http://graph.facebook.com/119560198524790/picture?type=square'} />
            </Grid.Column>

            <Grid.Column computer={13}>
              <Card.Header>
                {seed.owner && seed.owner.name ? seed.owner.name : seed.identity}
              </Card.Header>
              <Card.Meta>
                <strong>{seed.identity ? seed.identity : ''}</strong>
              </Card.Meta>
              <Card.Description>
                <div>
                  {`Companion UUID: ${seed.companionUUID ? seed.companionUUID : ''}`}
                </div>
                <div>
                  {`Facebook Id: ${seed.facebookID ? seed.facebookID : ''}`}
                </div>
                <DeviceList devices={seed.devices} />
              </Card.Description>

            </Grid.Column>
          </Grid>
        </Card.Content>
        <Card.Content extra>
          {/*<div className='ui two buttons'>
          <Button basic color='green'>Approve</Button>
          <Button basic color='red'>Decline</Button>
        </div>*/}
          <a>
            <Icon name='tablet' />
            {seed.devices.length} Devices
      </a>
        </Card.Content>
      </Card>
    )}
  </Card.Group>
)

export default SeedList