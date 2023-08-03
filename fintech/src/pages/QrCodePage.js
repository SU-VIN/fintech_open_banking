import AppHeader from "../components/common/AppHeader";
import { QRCodeSVG } from "qrcode.react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
const QrCodePage = () => {
  const queryParams = useLocation().search;
  const parsed = queryString.parse(queryParams);
  const fintechUseNo = parsed.fintechUseNo;
  return (
    <div>
      <AppHeader title={"QR 코드"}></AppHeader>
      <QRCodeSVG value={fintechUseNo} size={256} />
    </div>
  );
};

export default QrCodePage;
