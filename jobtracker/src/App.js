import { useState } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import { useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';

function App() {
  const [compData, setCompData] = useState([])

  useEffect(() => {
    const fetchCompanies = async () => {
      let data = (await axios.get('companies.json')).data;
      setCompData(data);
    }

    fetchCompanies();

  }, []);

  const updateData=async()=>{
    
  }

  return (
    <>  
    
    <div className='container mt-5'>
    <div className='row text-center'>
    <div className='col'>
    <h2>Companies</h2>

    </div>
    </div>
    </div>

      <div className='container mt-5'>
      <div className='row'>
        <div className='col'>

          {compData.length > 0 ?
            <Table striped bordered hover>

              <thead>
                <tr>
                  <th>
                    Company
                  </th>
                  <th>
                    Salary
                  </th>
                  <th>
                    Status
                  </th>
                  <th>
                    Update
                  </th>
                </tr>
              </thead>
              <tbody>
                {compData.map((comp, i) => <tr key={i}>
                  <td>{comp.companyName}</td>
                  <td>{comp.salary}</td>
                  <td>{comp.status}</td>
                  <td>
                    <Button className='success'>
                      Update
                    </Button>
                  </td>
                </tr>)}
              </tbody>
            </Table>
            : null}

        </div>
      </div>
    </div>
    </>

  );
}

export default App;
