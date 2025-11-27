const BioData =(props)=>{
   return (
      <div>
         <h1>Biodata:</h1>
         <p><strong>Name:</strong>{props.name}</p>
         <p><strong>Phone:</strong>{props.phone}</p>
         <p><strong>Email:</strong>{props.email}</p>
         <div>
            <h2>Skills:</h2>
            {props?.skills?.map((skill)=>(
            <li key={skill}>{skill}</li>
            ))}
         </div>
         <div>
            <h2>Social Medias:</h2>
            {props?.socialLinks?.map((socialLink)=>(
               <li key={socialLink.header}><strong>{socialLink.header}:{socialLink.link}</strong></li>   
            ))}
         </div>
         <hr/>
      </div>
   )
}

export default BioData