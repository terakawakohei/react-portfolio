import React from "react"
import { FooterStyle, FooterBody } from "./style"
import { ContainerLayout } from "../../common"

const Footer = () => {
  return (
    <>
      <FooterStyle>
        <ContainerLayout>
          <FooterBody>
            {/* <FooterSocialMedia>
							{socialMedia.map(({ id, name, url }) => (
								<li key={id}> 
									<MediaLink className="lined-link" href={url} target="_blank" rel="noopener noreferrer" aria-label={`follow us on ${name}`}>
										{name}
									</MediaLink> 
								</li>
							))}
						</FooterSocialMedia> */}
            {/* <div>
							<p className="text-primary quote"> Ready to take the next step and work together? </p>
							<ButtonDefault href={`mailto:${data.SiteContact.email}`}> Contact me </ButtonDefault>
						</div> */}
          </FooterBody>
          <div className="box">
            {/* <SubRight> Good design doesn't date. Bad design does. </SubRight> */}
            {/* <CopyRight className="text-dark">
              ©<span>2021 </span>
            </CopyRight> */}
          </div>
        </ContainerLayout>
      </FooterStyle>
    </>
  )
}

export default Footer
