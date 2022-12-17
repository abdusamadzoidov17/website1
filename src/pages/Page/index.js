import React from "react";

import {
  Column,
  Stack,
  Row,
  Img,
  Text,
  Button,
  List,
  Input,
  Line,
} from "components";

const Page = () => {
  function handleNavigate() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-poppins items-center justify-start mx-[auto] w-[100%]">
        <Stack className="h-[848px] relative w-[100%]">
          <Column
            className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start top-[0] w-[100%]"
            style={{ backgroundImage: "url('images/img_intro.png')" }}
          >
            <Column className="bg-black_900_33 flex flex-col items-center justify-start md:p-[12px] sm:p-[15px] p-[22px] w-[100%]">
              <Column className="flex flex-col justify-start sm:mb-[129px] md:mb-[166px] mb-[283px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[74%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                  <Img
                    src="images/img_logo1.png"
                    className="max-w-[100%] w-[12%]"
                    alt="logoOne"
                  />
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] pr-[1px] pt-[1px] sm:px-[0] sm:w-[100%] w-[65%]">
                    <Column className="flex flex-col items-center justify-start mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                          <Text
                            className="font-semibold my-[1px] text-white_A700 uppercase w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Main
                          </Text>
                          <Text
                            className="font-semibold mt-[1px] text-white_A700 uppercase w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Our services
                          </Text>
                          <Text
                            className="font-semibold mb-[1px] text-white_A700 uppercase w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            About
                          </Text>
                          <Text
                            className="font-semibold mb-[1px] text-white_A700 uppercase w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Contacts
                          </Text>
                        </Row>
                        <div className="bg-white_A700 sm:h-[1px] h-[2px] mt-[2px] w-[11%]"></div>
                      </Column>
                    </Column>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[7%]">
                      <Text
                        className="font-semibold mt-[1px] text-gray_400 uppercase w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        ru
                      </Text>
                      <Text
                        className="font-semibold mb-[1px] text-white_A700 uppercase w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        EN
                      </Text>
                    </Row>
                  </Row>
                </Row>
                <Text
                  className="leading-[150.00%] mt-[130px] sm:mt-[59px] md:mt-[76px] sm:mx-[0] text-white_A700 uppercase sm:w-[100%] w-[66%]"
                  as="h1"
                  variant="h1"
                >
                  KEEPING YOU ON THE ROAD WITH <br />
                  SERVICE YOU CAN TRUST
                  <br />
                </Text>
                <Button className="cursor-pointer font-medium min-w-[17%] sm:mt-[24px] md:mt-[31px] mt-[53px] text-[18px] text-center text-white_A700 w-[max-content]">
                  Show more
                </Button>
              </Column>
            </Column>
          </Column>
          <Row className="absolute bottom-[0] flex flex-row md:flex-wrap sm:flex-wrap inset-x-[0] items-center justify-center sm:mx-[0] mx-[auto] sm:px-[0] sm:w-[100%] w-[72%]">
            <Column className="bg-white_A700 flex flex-col sm:mx-[0] sm:p-[15px] md:p-[23px] p-[39px] shadow-bs sm:w-[100%] w-[33%]">
              <Img
                src="images/img_call.svg"
                className="sm:h-[14px] md:h-[18px] h-[30px] max-w-[100%] sm:w-[13px] md:w-[17px] w-[30px]"
                alt="call"
              />
              <Text
                className="font-bold sm:mt-[11px] md:mt-[14px] mt-[25px] text-black_900 md:tracking-ls1 sm:tracking-ls1 tracking-ls26999999999999997 uppercase w-[auto]"
                as="h5"
                variant="h5"
              >
                CALL US NOW 222-222-222
              </Text>
              <Text
                className="font-normal mb-[2px] sm:mt-[10px] md:mt-[13px] mt-[23px] not-italic text-gray_400 w-[auto]"
                as="h5"
                variant="h5"
              >
                Feel free to call us
              </Text>
            </Column>
            <List
              className="sm:gap-[10px] md:gap-[12px] gap-[22px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] md:ml-[12px] ml-[21px] sm:ml-[9px] sm:w-[100%] w-[67%]"
              orientation="horizontal"
            >
              <Column className="bg-white_A700 flex flex-col justify-end sm:p-[15px] md:p-[21px] p-[36px] shadow-bs w-[100%]">
                <Img
                  src="images/img_calendar.svg"
                  className="sm:h-[14px] md:h-[18px] h-[30px] max-w-[100%] ml-[1px] mt-[2px] sm:w-[13px] md:w-[17px] w-[30px]"
                  alt="calendar"
                />
                <Text
                  className="font-bold font-poppins ml-[1px] sm:mt-[11px] md:mt-[14px] mt-[25px] text-black_900 md:tracking-ls1 sm:tracking-ls1 tracking-ls26999999999999997 uppercase w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  GET FREE APPOITMET
                </Text>
                <Text
                  className="font-normal font-rubik ml-[1px] sm:mt-[11px] md:mt-[14px] mt-[25px] not-italic text-gray_400 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Free Diagnosis & Brake Checks
                </Text>
              </Column>
              <Column className="bg-white_A700 flex flex-col justify-end sm:p-[15px] md:p-[21px] p-[37px] shadow-bs w-[100%]">
                <Img
                  src="images/img_location.svg"
                  className="sm:h-[14px] md:h-[18px] h-[30px] max-w-[100%] ml-[3px] mt-[1px] sm:w-[13px] md:w-[17px] w-[30px]"
                  alt="location"
                />
                <Text
                  className="font-bold sm:ml-[3px] md:ml-[4px] ml-[7px] sm:mt-[11px] md:mt-[14px] mt-[25px] text-black_900 md:tracking-ls1 sm:tracking-ls1 tracking-ls26999999999999997 uppercase w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  FIND US ON MAP
                </Text>
                <Text
                  className="font-normal sm:ml-[3px] md:ml-[4px] ml-[7px] sm:mt-[10px] md:mt-[14px] mt-[24px] not-italic text-gray_400 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  New York, 1286 Ruumu Nanor
                </Text>
              </Column>
            </List>
          </Row>
        </Stack>
        <Column className="flex flex-col items-center justify-start max-w-[1201px] ml-[auto] mr-[auto] mt-[106px] sm:mt-[48px] md:mt-[62px] md:pb-[2px] sm:pb-[2px] pb-[5px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Column className="flex flex-col justify-start w-[100%]">
            <Text
              className="text-black_900 md:tracking-ls2 sm:tracking-ls2 tracking-ls45 uppercase w-[auto]"
              as="h3"
              variant="h3"
            >
              OUR SERVICES
            </Text>
            <a
              href={"javascript:"}
              className="font-normal sm:mt-[11px] md:mt-[15px] mt-[26px] not-italic text-[15px] text-black_900 md:tracking-ls1 sm:tracking-ls1 tracking-ls225 underline w-[auto]"
              rel="noreferrer"
            >
              VIEW ALL SERVICES
            </a>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[28px] md:mt-[37px] mt-[63px] w-[100%]">
              <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                <Column
                  className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
                  style={{ backgroundImage: "url('images/img_group9.png')" }}
                >
                  <Column className="bg-black_900_b2 flex flex-col items-center justify-end sm:p-[15px] md:p-[17px] p-[29px] w-[100%]">
                    <Stack className="bg-deep_orange_A700 h-[100px] md:mt-[100px] mt-[171px] sm:mt-[78px] sm:p-[15px] md:p-[23px] p-[40px] relative rounded-radius50 w-[100px] sm:w-[45px] md:w-[58px]">
                      <Img
                        src="images/img_plus.svg"
                        className="absolute h-[20px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[11px] w-[20px] sm:w-[9px]"
                        alt="plus"
                      />
                    </Stack>
                    <Text
                      className="font-semibold leading-[150.00%] mb-[3px] sm:mt-[27px] md:mt-[35px] mt-[60px] sm:mx-[0] text-white_A700 sm:tracking-ls1 md:tracking-ls2 tracking-ls4140000000000001 uppercase sm:w-[100%] w-[83%]"
                      as="h5"
                      variant="h5"
                    >
                      ANNUAL CHECKUPS FROM YOUR PHYSICIAN KEEP YOU IN GOOD
                      HEALTH
                    </Text>
                  </Column>
                </Column>
                <Text
                  className="sm:mt-[11px] md:mt-[14px] mt-[25px] text-black_900 md:tracking-ls2 sm:tracking-ls2 tracking-ls46000000000000005 uppercase w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  DIAGNOSTIC
                </Text>
              </Column>
              <List
                className="sm:gap-[10px] md:gap-[12px] gap-[22px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:w-[100%] w-[67%]"
                orientation="horizontal"
              >
                <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                  <Img
                    src="images/img_istock12276099.png"
                    className="max-w-[100%] w-[100%]"
                    alt="iStock12276099"
                  />
                  <Text
                    className="sm:mt-[11px] md:mt-[14px] mt-[25px] text-black_900 md:tracking-ls2 sm:tracking-ls2 tracking-ls46000000000000005 uppercase w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    TIRES & WHEELS
                  </Text>
                </Column>
                <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                  <Img
                    src="images/img_istock54460426.png"
                    className="max-w-[100%] w-[100%]"
                    alt="iStock54460426"
                  />
                  <Text
                    className="sm:mt-[11px] md:mt-[14px] mt-[25px] text-black_900 md:tracking-ls2 sm:tracking-ls2 tracking-ls46000000000000005 uppercase w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    ENGINES
                  </Text>
                </Column>
              </List>
            </Row>
          </Column>
        </Column>
        <Row className="bg-gray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[44px] md:mt-[57px] mt-[98px] p-[117px] sm:p-[15px] md:p-[69px] w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center max-w-[1201px] mb-[3px] md:ml-[71px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
              <Text
                className="leading-[150.00%] sm:mx-[0] text-white_A700 md:tracking-ls2 sm:tracking-ls2 tracking-ls45 uppercase sm:w-[100%] w-[97%]"
                as="h3"
                variant="h3"
              >
                WE UNDERSTAND HOW IMPORTANT IT IS TO FIND THE RIGHT AUTO SERVICE
              </Text>
              <Text
                className="font-semibold leading-[150.00%] sm:mt-[19px] md:mt-[24px] mt-[42px] text-gray_400 sm:tracking-ls1 md:tracking-ls2 tracking-ls345 w-[100%]"
                as="h6"
                variant="h6"
              >
                Car repairs and maintenance can be expensive and no one wants to
                have pay to repair damage caused by shoddy repair service. When
                you bring your car into our auto shop, you won’t have to worry
                because our staff is comprised of ASE certified technicians who
                are committed to making sure you have a safe dependable car.
                <br />
                <br />
                <br />
              </Text>
              <a
                href={"javascript:"}
                className="font-medium ml-[2px] sm:mt-[23px] md:mt-[30px] mt-[52px] text-[18px] text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls26999999999999997 underline uppercase w-[auto]"
                rel="noreferrer"
              >
                MORE ABOUT US
              </a>
            </Column>
            <Img
              src="images/img_gettyimages693.png"
              className="max-w-[100%] md:ml-[107px] ml-[182px] sm:ml-[83px] sm:w-[100%] w-[43%]"
              alt="GettyImages693"
            />
          </Row>
        </Row>
        <Column className="flex flex-col items-center justify-start max-w-[1199px] ml-[auto] mr-[auto] mt-[135px] sm:mt-[61px] md:mt-[79px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Text className="text-black_900 uppercase w-[auto]" variant="body1">
            FAST & EASY
            <br />
          </Text>
          <Text
            className="sm:mt-[30px] md:mt-[39px] mt-[67px] text-black_900 sm:tracking-ls2 md:tracking-ls3 tracking-ls6 uppercase w-[auto]"
            as="h2"
            variant="h2"
          >
            our work process
          </Text>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[102px] sm:mt-[46px] md:mt-[60px] w-[100%]">
            <Column className="bg-white_A700 flex flex-col sm:mx-[0] md:p-[14px] sm:p-[15px] p-[24px] shadow-bs sm:w-[100%] w-[33%]">
              <Text
                className="font-bold sm:ml-[2px] md:ml-[3px] ml-[6px] mt-[12px] sm:mt-[5px] md:mt-[7px] text-black_900 md:tracking-ls1 sm:tracking-ls1 tracking-ls26999999999999997 uppercase w-[auto]"
                as="h5"
                variant="h5"
              >
                1.Request your quote
              </Text>
              <Text
                className="font-normal leading-[150.00%] mb-[2px] md:ml-[3px] ml-[6px] mt-[15px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] not-italic text-gray_400 sm:w-[100%] w-[99%]"
                as="h5"
                variant="h5"
              >
                We will be there when you most need us
                <br />
                <br />
                <br />
              </Text>
            </Column>
            <List
              className="sm:gap-[10px] md:gap-[12px] gap-[22px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:w-[100%] w-[67%]"
              orientation="horizontal"
            >
              <Column className="bg-white_A700 flex flex-col justify-start sm:p-[15px] md:p-[20px] p-[35px] shadow-bs w-[100%]">
                <Text
                  className="font-bold ml-[1px] text-black_900 md:tracking-ls1 sm:tracking-ls1 tracking-ls26999999999999997 uppercase w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  02. BRING YOUR VEHICLE
                  <br />
                </Text>
                <Text
                  className="font-normal leading-[150.00%] mb-[14px] sm:mb-[6px] md:mb-[8px] ml-[1px] md:mt-[11px] mt-[19px] sm:mt-[8px] sm:mx-[0] not-italic text-gray_400 sm:w-[100%] w-[73%]"
                  as="h5"
                  variant="h5"
                >
                  We are car guys at heart
                  <br />
                  <br />
                  <br />
                </Text>
              </Column>
              <Column className="bg-white_A700 flex flex-col justify-center md:p-[15px] sm:p-[15px] p-[27px] shadow-bs w-[100%]">
                <Text
                  className="font-bold sm:mt-[3px] md:mt-[4px] mt-[8px] text-black_900 md:tracking-ls1 sm:tracking-ls1 tracking-ls26999999999999997 uppercase w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  03. GET IT REPAIRED
                </Text>
                <Text
                  className="font-normal leading-[150.00%] sm:mb-[10px] md:mb-[13px] mb-[23px] md:mt-[11px] mt-[19px] sm:mt-[8px] sm:mx-[0] not-italic text-gray_400 sm:w-[100%] w-[95%]"
                  as="h5"
                  variant="h5"
                >
                  High quality, low cost car servicing
                  <br />
                  <br />
                  <br />
                </Text>
              </Column>
            </List>
          </Row>
        </Column>
        <Column className="bg-gray_900 flex flex-col justify-end sm:mt-[45px] md:mt-[58px] mt-[99px] sm:p-[15px] md:p-[57px] p-[97px] w-[100%]">
          <Column className="flex flex-col items-center justify-start max-w-[440px] md:ml-[79px] ml-[auto] mr-[auto] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col justify-start w-[100%]">
              <Text
                className="text-white_A700 md:tracking-ls2 sm:tracking-ls2 tracking-ls45 uppercase w-[auto]"
                as="h3"
                variant="h3"
              >
                Contact us
              </Text>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[22px] md:mt-[29px] mt-[50px] w-[100%]">
                <Input
                  className="font-normal not-italic p-[0] text-[15px] placeholder:text-white_A700 text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls225 w-[100%]"
                  wrapClassName="sm:mx-[0] sm:w-[100%] w-[45%]"
                  type="text"
                  name="input"
                  placeholder="Name"
                ></Input>
                <Input
                  className="font-normal not-italic p-[0] text-[15px] placeholder:text-white_A700 text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls225 w-[100%]"
                  wrapClassName="sm:mx-[0] sm:w-[100%] w-[45%]"
                  type="text"
                  name="input One"
                  placeholder="Last name"
                ></Input>
              </Row>
              <Stack className="h-[48px] sm:mt-[13px] md:mt-[17px] mt-[29px] relative w-[100%]">
                <Row className="absolute bottom-[0] flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between left-[0] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                  <Input
                    className="font-normal not-italic p-[0] text-[15px] placeholder:text-white_A700 text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls225 w-[100%]"
                    wrapClassName="sm:mx-[0] sm:w-[100%] w-[60%]"
                    type="email"
                    name="GroupEleven"
                    placeholder="Email"
                  ></Input>
                  <Text
                    className="font-normal mt-[1px] not-italic text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls225 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    22334455
                  </Text>
                </Row>
                <Input
                  className="absolute font-normal inset-y-[0] my-[auto] not-italic p-[0] right-[0] text-[12px] placeholder:text-white_A700 text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls17999999999999998 w-[100%]"
                  wrapClassName="absolute sm:mx-[0] sm:w-[100%] w-[45%]"
                  type="number"
                  name="input Two"
                  placeholder="Phone"
                  size="md"
                ></Input>
              </Stack>
              <Column className="flex flex-col justify-start sm:mt-[27px] md:mt-[35px] mt-[60px] w-[100%]">
                <Text
                  className="font-normal not-italic text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls225 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Message
                </Text>
                <Line className="bg-white_A700 h-[0.79px] mt-[109px] sm:mt-[49px] md:mt-[64px] w-[100%]" />
              </Column>
              <Button className="cursor-pointer font-medium min-w-[45%] sm:mt-[16px] md:mt-[21px] mt-[37px] text-[18px] text-center text-white_A700 uppercase w-[max-content]">
                Send
              </Button>
            </Column>
          </Column>
        </Column>
        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[15px] md:p-[35px] p-[61px] w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1206px] md:ml-[100px] ml-[auto] mr-[auto] mt-[1px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text
              className="font-normal leading-[150.00%] mt-[4px] sm:mx-[0] not-italic text-black_900 md:tracking-ls1 sm:tracking-ls1 tracking-ls225 sm:w-[100%] w-[31%]"
              as="h6"
              variant="h6"
            >
              © 2021 Auto theme by Frontend Tricks
              <br />
              <br />
              <br />
            </Text>
            <Img
              src="images/img_volume.svg"
              className="sm:h-[12px] md:h-[15px] h-[25px] max-w-[100%] mb-[2px] sm:ml-[330px] md:ml-[427px] ml-[724px] sm:w-[11px] md:w-[14px] w-[25px]"
              alt="volume"
            />
            <Img
              src="images/img_facebook.svg"
              className="common-pointer sm:h-[12px] md:h-[15px] h-[25px] max-w-[100%] mb-[2px] md:ml-[12px] ml-[21px] sm:ml-[9px] sm:w-[11px] md:w-[14px] w-[25px]"
              onClick={handleNavigate}
              alt="facebook"
            />
            <Img
              src="images/img_camera.svg"
              className="sm:h-[12px] md:h-[15px] h-[25px] max-w-[100%] sm:ml-[10px] md:ml-[12px] ml-[22px] my-[1px] sm:w-[11px] md:w-[14px] w-[25px]"
              alt="camera"
            />
          </Row>
        </Row>
      </Column>
    </>
  );
};

export default Page;
