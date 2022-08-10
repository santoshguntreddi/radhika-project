import { useState } from 'react';
import '../RegistrationForm/RegistrationForm.css'

function RegistrationForm() {
    const [rvoFarmerDetails, setRvoFarmerDetails] = useState([]);
    const [farmerId, setFarmerId] = useState('');
    const [accountHolderName, setAccountHolderName] = useState('');
    const [leaseOrOwn, setLeaseOrOwn] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [village, setVillage] = useState('');
    const [mandal, setMandal] = useState('');
    const [aadhaar, setAadhaar] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [landHolderName, setLandHolderName] = useState('');
    const [landVillage, setLandVillage] = useState('');
    const [landSurveyNumbers, setLandSurveyNumbers] = useState('');
    const [landPlantedArea, setLandPlantedArea] = useState(0);
    const [landPlantedYear, setLandPlantedYear] = useState(0);
    const [landExistingPlantation, setLandExistingPlantation] = useState('');
    const [cropDetails, setCropDetails] = useState([]);
    const [remarks, setRemarks] = useState('');

    const addFarmerDetails = () => {
        let farmerDetails = {
            farmerId: farmerId,
            accountHolderName: accountHolderName,
            leaseOrOwn: leaseOrOwn,
            fatherName: fatherName,
            village: village,
            mandal: mandal,
            aadhaar: aadhaar,
            phoneNumber: phoneNumber,
            cropDetails: [...cropDetails],
            remarks: remarks
        }
        setRvoFarmerDetails([...rvoFarmerDetails, farmerDetails]);
        console.log(farmerDetails);
        setLeaseOrOwn('');
    }
    const addCropDetails = () => {
        let cropObj = {
            landHolderName: landHolderName,
            landVillage: landVillage,
            landSurveyNumbers: landSurveyNumbers,
            landPlantedArea: landPlantedArea,
            landPlantedYear: landPlantedYear,
            landExistingPlantation: landExistingPlantation
        }
        setCropDetails([...cropDetails, cropObj]);
        setLandHolderName('');
        setLandVillage('');
        setLandSurveyNumbers('');
        setLandPlantedArea(0);
        setLandPlantedYear(0);
        setLandExistingPlantation('');
    }
    return (
        <div className='form'>
            <div className="form-body">
                <div className="farmerId">
                    <label className="form_label" htmlFor="farmerId">RVO Farmer ID</label>
                    <input className="form_input" type="text" id='farmerId' placeholder='RVO Farmer ID' value={farmerId} onChange={(e) => setFarmerId(e.target.value)} />
                </div>
                <div className="accountHolderName">
                    <label className="form_label" htmlFor="accountHolderName">Name of the Account holder</label>
                    <input className="form_input" type="text" id='accountHolderName' placeholder='Account Holder Name' value={accountHolderName} onChange={(e) => setAccountHolderName(e.target.value)} />
                </div>
                <div className="leaseOrOwn">
                    <label className="form_label" htmlFor="leaseOrOwn">Lease / Own</label>
                    <select id='leaseOrOwn' className='form_input' value={leaseOrOwn} onChange={(e) => setLeaseOrOwn(e.target.value)}  >
                        <option value='' defaultValue={''}>--select--</option>
                        <option value='Lease'>Lease</option>
                        <option value='Own'>Own</option>
                    </select>
                </div>
                <div className="fatherName">
                    <label className="form_label" htmlFor="fatherName">Father Name</label>
                    <input className="form_input" type="text" id='fatherName' placeholder='Father Name' value={fatherName} onChange={(e) => setFatherName(e.target.value)} />
                </div>
                <div className="village">
                    <label className="form_label" htmlFor="village" >Village (Based on PFB Receipt)</label>
                    <input className="form_input" type="text" id='village' placeholder='Village' value={village} onChange={(e) => setVillage(e.target.value)} />
                </div>
                <div className="mandal">
                    <label className="form_label" htmlFor="mandal">Mandal</label>
                    <input className="form_input" type="text" id='mandal' placeholder='Mandal' value={mandal} onChange={(e) => setMandal(e.target.value)} />
                </div>
                <div className="aadhaar">
                    <label className="form_label" htmlFor="aadhaar">Aadhaar Card Number</label>
                    <input className="form_input" type="text" id='aadhaar' placeholder='Aadhaar Card Number' value={aadhaar} onChange={(e) => setAadhaar(e.target.value)} />
                </div>
                <div className="phoneNumber">
                    <label className="form_label" htmlFor="phoneNumber">Phone Number</label>
                    <input className="form_input" type="text" id='phoneNumber' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <div className="table css-serial">
                    <table className='table table-bordered'>
                        <thead className="table-dark">
                            <tr>
                                <th   >Sl.No</th>
                                <th >Name of the Land Holder</th>
                                <th >Village</th>
                                <th >Survey Numbers</th>
                                <th >Total Planted Area</th>
                                <th >Year of Plantation</th>
                                <th >Existing Plantation</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cropDetails.map((crop, i) => (
                                <tr key={'crop' + i}>
                                    <td></td>
                                    <td>{crop.landHolderName}</td>
                                    <td>{crop.landVillage}</td>
                                    <td>{crop.landSurveyNumbers}</td>
                                    <td>{crop.landPlantedArea}</td>
                                    <td>{crop.landPlantedYear}</td>
                                    <td>{crop.landExistingPlantation}</td>

                                </tr>
                            ))}
                            <tr>
                                <td></td>
                                <td><input type='text' id="landHolderName" placeholder='Name of the Land Holder' value={landHolderName} onChange={(e) => setLandHolderName(e.target.value)} /></td>
                                <td><input type='text' id="landVillage" placeholder='Village' value={landVillage} onChange={(e) => setLandVillage(e.target.value)} /></td>
                                <td><input type='text' id="landSurveyNumbers" placeholder='Survey Numbers' value={landSurveyNumbers} onChange={(e) => setLandSurveyNumbers(e.target.value)} /></td>
                                <td><input type='text' id="landPlantedArea" placeholder='Total Planted Area' value={landPlantedArea ? landPlantedArea : ''} onChange={(e) => setLandPlantedArea(e.target.value)} /></td>
                                <td><input type='text' id="landPlantedYear" placeholder='Year of Plantation' value={landPlantedYear ? landPlantedYear : ''} onChange={(e) => setLandPlantedYear(e.target.value)} /></td>
                                <td><input type='text' id="landExistingPlantation" placeholder='Existing Plantation' value={landExistingPlantation} onChange={(e) => setLandExistingPlantation(e.target.value)} /></td>
                                <td><button type='submit' className='btn btn-dark' onClick={() => addCropDetails()}>Add</button></td>

                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="remarks">
                    <label className="form_label" htmlFor="remarks">Remarks</label>
                    <textarea className="form_input" id="remarks" value={remarks} onChange={(e) => setRemarks(e.target.value)} ></textarea>
                </div>
            </div>

            <div className='footer'>
                <button type='submit' className='btn btn-success' onClick={() => addFarmerDetails()} >Upload</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button type='reset' className='btn btn-secondary' >Reset</button>
            </div>
        </div>
    );
}

export default RegistrationForm;