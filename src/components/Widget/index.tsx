import React, { useRef, useState } from "react";
import { TouchableOpacity } from "react-native";
import { ChatTeardropDots } from "phosphor-react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

import { styles } from "./styles";
import { theme } from "../../theme";
import { Options } from "../Options";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { Form } from "../Form";
import { Success } from "../Success";

export type FeedbackType = keyof typeof feedbackTypes;

export function Widget() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleOpenBottomSheet() {
    bottomSheetRef.current?.expand();
  }

  function handleFeedbackRestart() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  function handleFeedbackSent() {
    setFeedbackSent(true);
  }

  return (
    <>
      <TouchableOpacity onPress={handleOpenBottomSheet} style={styles.button}>
        <ChatTeardropDots size={24} color={theme.colors.text_on_brand_color} />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        {feedbackSent ? (
          <Success onSendAnotherFeedback={handleFeedbackRestart} />
        ) : (
          <>
            {feedbackType ? (
              <Form
                feedbackType={feedbackType}
                onFeedbackCanceled={handleFeedbackRestart}
                onFeedbackSent={handleFeedbackSent}
              />
            ) : (
              <Options onFeedbackChanged={setFeedbackType} />
            )}
          </>
        )}
      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);
