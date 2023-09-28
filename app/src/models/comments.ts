/**
 * AUTO GENERATED FROM HTTP RESPONSE JSON
 */
export interface Comments {
    kind: string;
    data: CommentData;
}

export interface CommentData {
    after:      null;
    dist:       number | null;
    modhash:    string;
    geo_filter: string;
    children:   PurpleChild[];
    before:     null;
}

export interface PurpleChild {
    kind: string;
    data: PurpleData;
}

export interface PurpleData {
    approved_at_utc:                  null;
    subreddit:                        string;
    selftext?:                        string;
    user_reports:                     any[];
    saved:                            boolean;
    mod_reason_title:                 null;
    gilded:                           number;
    clicked?:                         boolean;
    title?:                           string;
    link_flair_richtext?:             any[];
    subreddit_name_prefixed:          string;
    hidden?:                          boolean;
    pwls?:                            number;
    link_flair_css_class?:            string;
    downs:                            number;
    thumbnail_height?:                number;
    top_awarded_type:                 null;
    parent_whitelist_status?:         string;
    hide_score?:                      boolean;
    name:                             string;
    quarantine?:                      boolean;
    link_flair_text_color?:           string;
    upvote_ratio?:                    number;
    author_flair_background_color:    null;
    ups:                              number;
    domain?:                          string;
    media_embed?:                     Gildings;
    thumbnail_width?:                 number;
    author_flair_template_id:         null;
    is_original_content?:             boolean;
    author_fullname:                  string;
    secure_media?:                    null;
    is_reddit_media_domain?:          boolean;
    is_meta?:                         boolean;
    category?:                        null;
    secure_media_embed?:              Gildings;
    link_flair_text?:                 string;
    can_mod_post:                     boolean;
    score:                            number;
    approved_by:                      null;
    is_created_from_ads_ui?:          boolean;
    author_premium:                   boolean;
    thumbnail?:                       string;
    edited:                           boolean;
    author_flair_css_class:           null;
    author_flair_richtext:            any[];
    gildings:                         Gildings;
    post_hint?:                       string;
    content_categories?:              null;
    is_self?:                         boolean;
    subreddit_type:                   string;
    created:                          number;
    link_flair_type?:                 string;
    wls?:                             number;
    removed_by_category?:             null;
    banned_by:                        null;
    author_flair_type:                string;
    total_awards_received:            number;
    allow_live_comments?:             boolean;
    selftext_html?:                   null;
    likes:                            null;
    suggested_sort?:                  null;
    banned_at_utc:                    null;
    url_overridden_by_dest?:          string;
    view_count?:                      null;
    archived:                         boolean;
    no_follow:                        boolean;
    is_crosspostable?:                boolean;
    pinned?:                          boolean;
    over_18?:                         boolean;
    preview?:                         Preview;
    all_awardings:                    any[];
    awarders:                         any[];
    media_only?:                      boolean;
    link_flair_template_id?:          string;
    can_gild:                         boolean;
    spoiler?:                         boolean;
    locked:                           boolean;
    author_flair_text:                null;
    treatment_tags:                   any[];
    visited?:                         boolean;
    removed_by?:                      null;
    mod_note:                         null;
    distinguished:                    null;
    subreddit_id:                     string;
    author_is_blocked:                boolean;
    mod_reason_by:                    null;
    num_reports:                      null;
    removal_reason:                   null;
    link_flair_background_color?:     string;
    id:                               string;
    is_robot_indexable?:              boolean;
    num_duplicates?:                  number;
    report_reasons:                   null;
    author:                           string;
    discussion_type?:                 null;
    num_comments?:                    number;
    send_replies:                     boolean;
    media?:                           null;
    contest_mode?:                    boolean;
    author_patreon_flair:             boolean;
    author_flair_text_color:          null;
    permalink:                        string;
    whitelist_status?:                string;
    stickied:                         boolean;
    url?:                             string;
    subreddit_subscribers?:           number;
    created_utc:                      number;
    num_crossposts?:                  number;
    mod_reports:                      any[];
    is_video?:                        boolean;
    comment_type?:                    null;
    replies?:                         Replies;
    collapsed_reason_code?:           null;
    parent_id?:                       string;
    collapsed?:                       boolean;
    body?:                            string;
    is_submitter?:                    boolean;
    body_html?:                       string;
    collapsed_reason?:                null;
    associated_award?:                null;
    unrepliable_reason?:              null;
    score_hidden?:                    boolean;
    link_id?:                         string;
    controversiality?:                number;
    depth?:                           number;
    collapsed_because_crowd_control?: null;
}

export interface Gildings {
}

export interface Preview {
    images:  Image[];
    enabled: boolean;
}

export interface Image {
    source:      Source;
    resolutions: Source[];
    variants:    Gildings;
    id:          string;
}

export interface Source {
    url:    string;
    width:  number;
    height: number;
}

export interface Replies {
    kind: string;
    data: RepliesData;
}

export interface RepliesData {
    after:      null;
    dist:       null;
    modhash:    string;
    geo_filter: string;
    children:   FluffyChild[];
    before:     null;
}

export interface FluffyChild {
    kind: string;
    data: FluffyData;
}

export interface FluffyData {
    subreddit_id:                    string;
    approved_at_utc:                 null;
    author_is_blocked:               boolean;
    comment_type:                    null;
    awarders:                        any[];
    mod_reason_by:                   null;
    banned_by:                       null;
    author_flair_type:               string;
    total_awards_received:           number;
    subreddit:                       string;
    author_flair_template_id:        null;
    likes:                           null;
    replies:                         string;
    user_reports:                    any[];
    saved:                           boolean;
    id:                              string;
    banned_at_utc:                   null;
    mod_reason_title:                null;
    gilded:                          number;
    archived:                        boolean;
    collapsed_reason_code:           null;
    no_follow:                       boolean;
    author:                          string;
    can_mod_post:                    boolean;
    created_utc:                     number;
    send_replies:                    boolean;
    parent_id:                       string;
    score:                           number;
    author_fullname:                 string;
    removal_reason:                  null;
    approved_by:                     null;
    mod_note:                        null;
    all_awardings:                   any[];
    body:                            string;
    edited:                          boolean;
    top_awarded_type:                null;
    author_flair_css_class:          null;
    name:                            string;
    is_submitter:                    boolean;
    downs:                           number;
    author_flair_richtext:           any[];
    author_patreon_flair:            boolean;
    body_html:                       string;
    gildings:                        Gildings;
    collapsed_reason:                null;
    distinguished:                   null;
    associated_award:                null;
    stickied:                        boolean;
    author_premium:                  boolean;
    can_gild:                        boolean;
    link_id:                         string;
    unrepliable_reason:              null;
    author_flair_text_color:         null;
    score_hidden:                    boolean;
    permalink:                       string;
    subreddit_type:                  string;
    locked:                          boolean;
    report_reasons:                  null;
    created:                         number;
    author_flair_text:               null;
    treatment_tags:                  any[];
    collapsed:                       boolean;
    subreddit_name_prefixed:         string;
    controversiality:                number;
    depth:                           number;
    author_flair_background_color:   null;
    collapsed_because_crowd_control: null;
    mod_reports:                     any[];
    num_reports:                     null;
    ups:                             number;
}
