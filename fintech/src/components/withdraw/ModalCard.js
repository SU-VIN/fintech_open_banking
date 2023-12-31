import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const ModalCardBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 20px;
  border: 1px #112211 solid;
`;
const CardTitle = styled.div`
  font-size: 1rem;
  color: black;
`;
const FintechUseNo = styled.div`
  font-size: 0.7rem;
  margin-bottom: 30px;
`;

const WithDrawButton = styled.button`
  border: none;
  padding: 0.3rem;
  background: #2aa450;
  color: white;
  margin-top: 0.3rem;
`;

const ModalCard = ({ bankName, fintechUseNo, tofintechno }) => {
  //fintechUseNo : 내계좌
  //tofintechno : QR 코드로 읽어온 핀테크 계좌
  const [amount, setamount] = useState(""); //금액

  const genTransId = () => {
    let countnum = Math.floor(Math.random() * 1000000000) + 1;
    const clientNo = "M202300440";
    let transId = clientNo + "U" + countnum;
    return transId;
  };

  const access_token = localStorage.getItem("accessToken");

  const handlePayButtonClick = () => {
    const payRequest = {
      bank_tran_id: genTransId(),
      cntr_account_type: "N",
      cntr_account_num: "100000000001",
      dps_print_content: "오픈뱅킹출금",
      fintech_use_num: fintechUseNo,
      wd_print_content: "오픈뱅킹출금",
      tran_amt: amount,
      tran_dtime: "20230803140200",
      req_client_name: "홍길동",
      req_client_fintech_use_num: fintechUseNo,
      req_client_num: "HONGGILDONG1234",
      transfer_purpose: "ST",
      recv_client_name: "홍길동",
      recv_client_bank_code: "097",
      recv_client_account_num: "100000000001",
    };

    const option = {
      url: "/v2.0/transfer/withdraw/fin_num",
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${access_token}`,
      },
      data: payRequest,
    };

    axios(option).then((res) => {
      console.log(res);
      if (res.rsp_code === "A0000") {
        alert("출금 완료");
        deposit();
      }
    });
    // 출금 이체 발생시키기
    // data params json
    // tran_amt, fintech_use_num, req_client_fintech_use_num, bank_tran_id 고정값 사용 금지 나머지는 고정값으로
    // axios option으로 요청을 작성하기 <- api 요청
    // application/json 은 데이터를 어떻게 전송?
    // 결과를 로그로 작성
  };

  const deposit = () => {
    const two_legged =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJNMjAyMzAwNDQwIiwic2NvcGUiOlsib29iIl0sImlzcyI6Imh0dHBzOi8vd3d3Lm9wZW5iYW5raW5nLm9yLmtyIiwiZXhwIjoxNjk4ODIxNjkzLCJqdGkiOiI0ZGFmN2ZlNy03MmViLTRiNmYtOTQ2OS0wYzZlOWRmMDhlM2UifQ.3TtYtDOC2KcN60ozfvzugoDK2Z_9jYcaeyJRvkXzKLw";

    const depositRequest = {
      cntr_account_type: "N",
      cntr_account_num: "200000000001",
      wd_pass_phrase: "NONE",
      wd_print_content: "환불금액",
      name_check_option: "off",
      tran_dtime: "20220812130000",
      req_cnt: "1",
      req_list: [
        {
          tran_no: "1",
          bank_tran_id: "M202300440U008903011",
          fintech_use_num: "120230044088951024630415",
          print_content: "오픈서비스캐시백",
          tran_amt: 10000,
          req_client_name: "유관우",
          req_client_fintech_use_num: "120230044088951024009186",
          req_client_num: "HONGGILDONG1234",
          transfer_purpose: "ST",
        },
      ],
    };

    const option = {
      url: "/v2.0/transfer/deposit/fin_num",
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${two_legged}`,
      },
      data: depositRequest,
    };

    axios(option).then((data) => {
      console.log(data);
    });
    /**
     * #Last Work
     * 입금이체 작성해 주세요 !
     * 2legged token 사용 !
     * 입금을 하는 계좌를 잘 선택해 주세요
     */
  };

  const handleChange = (e) => {
    const { value } = e.target;
    console.log(value);
    setamount(value);
  };

  return (
    <ModalCardBlock>
      <CardTitle>{bankName}</CardTitle>
      <FintechUseNo>{fintechUseNo}</FintechUseNo>
      <p>{tofintechno}로 돈을 보냅니다.</p>
      <input onChange={handleChange}></input>
      <WithDrawButton onClick={handlePayButtonClick}>결제하기</WithDrawButton>
    </ModalCardBlock>
  );
};

export default ModalCard;
