import Link from "next/link";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Modal from "antd/lib/modal";
import { motion } from "framer-motion";

export default ({ isOpen, setIsOpen }) => {
  const close = () => setIsOpen(false);

  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3,
      },
    }),
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <StyledModal
      visible={isOpen}
      mask={false}
      footer={null}
      closable={false}
      onCancel={close}
    >
      <Root>
        <motion.div initial="hidden" animate="visible" variants={list}>
          <Header>
            <motion.div onClick={close} whileTap={{ rotate: 180 }}>
              <FontAwesomeIcon
                icon={faTimes}
                style={{ color: "white", textAlign: "right", fontSize: 23 }}
              />
            </motion.div>
          </Header>

          <Link href="/">
            <Links onClick={close}>
              <motion.div animate="visible" variants={item} custom={1}>
                /home
              </motion.div>
            </Links>
          </Link>

          <Link href="/projects">
            <Links onClick={close}>
              <motion.div animate="visible" variants={item} custom={2}>
                /projects
              </motion.div>
            </Links>
          </Link>

          <Link href="/certificates">
            <Links onClick={close}>
              <motion.div animate="visible" variants={item} custom={3}>
                /certificates
              </motion.div>
            </Links>
          </Link>
        </motion.div>
      </Root>
    </StyledModal>
  );
};

const StyledModal = styled(Modal)`
  animation-duration: 0s !important;

  .ant-modal-body {
    padding: 0px;
    background-color: gray;
    height: 100vh;
  }

  width: 100vw !important;
  .ant-modal {
    width: 100vw;
  }

  .ant-modal-content {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
  }

  @media (max-width: 767px) {
    .ant-modal {
      max-width: 100vw;
      margin: 8px auto;
      color: black;
    }
  }
`;

const Root = styled.div`
  display: flex;
  alignitems: center;
  justify-content: center;
  flex-direction: column-reverse;
  text-align: center;
`;

const Header = styled.div`
  height: 49px;
  background-color: #041429;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  div {
    height: 21px;
    margin-right: 20px;
    margin-top: 13px;
    padding: 0px;
    text-align: center;
    width: 21px;
  }
`;

const Links = styled.div`
  width: 100%;
  padding: 5px;
  div {
    padding: 10px;
    color: white;
    border: 2px solid whitesmoke;
    background-color: #041429;
    border-radius: 10px;
  }
`;
