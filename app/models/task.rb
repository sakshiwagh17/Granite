class Task <ApplicationRecord 
    MAX_TITLE_LENGTH = 125
    VALID_TITLE_REGEX=/\A.*[a-zA-Z0-9].*\z/i
    validates:title,presence:true, length: {maximum:125}, format: {with:VALID_TITLE_REGEX}
end