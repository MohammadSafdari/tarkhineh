import React from "react";
import {
    Box,
    Paper,
    Typography,
    Avatar,
    Rating,
    styled,
} from "@mui/material";

interface AppCardCommentProps {
    authorName: string;
    date: string;
    comment: string;
    rating: number;
    avatarUrl?: string;
}

const StyledPaper = styled(Paper)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    borderColor: theme.palette.info.main,
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing(1),
}));
const ContentWrapper = styled(Box)(() => ({
    flex: 1,
    minWidth: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 12,
}));
const CommentText = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.body1.fontSize,
    color: theme.palette.text.secondary,
    wordBreak: "break-word",
}));
const RatingWrapper = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    gap: 8,
}));
const RatingText = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.button.fontSize,
    color: theme.palette.secondary.main,
}));
const AuthorWrapper = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    flexShrink: 0,
    width: 80,
}));
const StyledAvatar = styled(Avatar)(() => ({
    width: 64,
    height: 64,
    backgroundColor: "#bdbdbd",
}));
const AuthorName = styled(Typography)(() => ({
    fontSize: 13,
    fontWeight: 600,
}));
const DateText = styled(Typography)(({ theme }) => ({
    fontSize: 11,
    color: theme.palette.text.secondary,
}));


const AppCardComment: React.FC<AppCardCommentProps> = ({
                                                           authorName,
                                                           date,
                                                           comment,
                                                           rating,
                                                           avatarUrl,
                                                       }) => {
    return (
        <StyledPaper variant="outlined">
            <ContentWrapper>
                <CommentText>{comment}</CommentText>

                <RatingWrapper>
                    <RatingText>{rating}</RatingText>

                    <Rating value={rating} max={1} readOnly size="small" />
                </RatingWrapper>
            </ContentWrapper>

            <AuthorWrapper>
                <StyledAvatar src={avatarUrl} alt={authorName} />

                <Box textAlign="center">
                    <AuthorName>{authorName}</AuthorName>

                    <DateText>{date}</DateText>
                </Box>
            </AuthorWrapper>
        </StyledPaper>
    );
};

export default AppCardComment;